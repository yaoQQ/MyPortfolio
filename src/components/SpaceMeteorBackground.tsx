import { useRef, useEffect, useCallback } from "react";

// ============ 可配置参数 ============
interface MeteorConfig {
  /** 流星密度（同屏最大数量） */
  meteorCount: number;
  /** 流星最小速度 */
  minSpeed: number;
  /** 流星最大速度 */
  maxSpeed: number;
  /** 流星最小长度 */
  minLength: number;
  /** 流星最大长度 */
  maxLength: number;
  /** 流星最小粗细 */
  minThickness: number;
  /** 流星最大粗细 */
  maxThickness: number;
  /** 流星角度范围（度，0=向右，90=向下） */
  angleMin: number;
  angleMax: number;
  /** 流星生成间隔（ms） */
  spawnInterval: number;
  /** 星星数量 */
  starCount: number;
  /** 流星颜色组 */
  meteorColors: string[];
  /** 星星颜色组 */
  starColors: string[];
}

const DEFAULT_CONFIG: MeteorConfig = {
  meteorCount: 30,
  minSpeed: 2,
  maxSpeed: 6,
  minLength: 120,
  maxLength: 400,
  minThickness: 1.5,
  maxThickness: 4,
  angleMin: 215,
  angleMax: 235,
  spawnInterval: 120,
  starCount: 200,
  meteorColors: ["#00d4ff", "#a855f7", "#ffffff", "#22c55e", "#fbbf24"],
  starColors: ["#ffffff", "#00d4ff", "#a855f7"],
};

// ============ 数据结构 ============
interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  speed: number;
  length: number;
  thickness: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  vx: number;
  vy: number;
}

// ============ 组件 ============
export default function SpaceMeteorBackground({
  config = DEFAULT_CONFIG,
}: {
  config?: Partial<MeteorConfig>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const cfg = useRef({ ...DEFAULT_CONFIG, ...config });

  const initStars = useCallback((width: number, height: number) => {
    const c = cfg.current;
    starsRef.current = Array.from({ length: c.starCount }, () => {
      const colorIdx = Math.floor(Math.random() * c.starColors.length);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.3,
        baseOpacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.003 + 0.001,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: c.starColors[colorIdx],
      };
    });
  }, []);

  const spawnMeteor = useCallback((width: number, height: number) => {
    const c = cfg.current;
    if (meteorsRef.current.length >= c.meteorCount) return;

    const angleDeg = c.angleMin + Math.random() * (c.angleMax - c.angleMin);
    const angleRad = (angleDeg * Math.PI) / 180;
    const speed = c.minSpeed + Math.random() * (c.maxSpeed - c.minSpeed);
    const length = c.minLength + Math.random() * (c.maxLength - c.minLength);
    const thickness =
      c.minThickness + Math.random() * (c.maxThickness - c.minThickness);
    const colorIdx = Math.floor(Math.random() * c.meteorColors.length);

    // 全屏范围生成流星，从右上到左下方向
    const x = Math.random() * width * 1.3;
    const y = -100 + Math.random() * height * 0.5;

    const maxLife = Math.max(
      (width + height) / speed,
      60
    );

    meteorsRef.current.push({
      x,
      y,
      speed,
      length,
      thickness,
      angle: angleRad,
      opacity: 1,
      life: 0,
      maxLife,
      color: c.meteorColors[colorIdx],
      vx: Math.cos(angleRad) * speed,
      vy: Math.sin(angleRad) * speed,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false })!;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      // 清空画布 - 深空背景
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, width, height);

      // 绘制星星
      for (const star of starsRef.current) {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const opacity = star.baseOpacity * twinkle;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // 较亮的星星加辉光
        if (star.size > 1.2 && opacity > 0.5) {
          ctx.globalAlpha = opacity * 0.3;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      // 生成新流星
      if (time - lastSpawnRef.current > cfg.current.spawnInterval) {
        spawnMeteor(width, height);
        lastSpawnRef.current = time;
      }

      // 更新和绘制流星
      const meteors = meteorsRef.current;
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += m.vx;
        m.y += m.vy;
        m.life++;

        // 生命周期透明度衰减
        const lifeRatio = m.life / m.maxLife;
        if (lifeRatio < 0.1) {
          m.opacity = lifeRatio / 0.1; // 渐入
        } else if (lifeRatio > 0.7) {
          m.opacity = 1 - (lifeRatio - 0.7) / 0.3; // 渐出
        } else {
          m.opacity = 1;
        }

        // 移除超出画面或生命结束的流星
        if (
          m.x < -m.length * 2 ||
          m.y > height + m.length ||
          m.opacity <= 0
        ) {
          meteors.splice(i, 1);
          continue;
        }

        // 计算流星尾部位置
        const tailX = m.x - (m.vx / m.speed) * m.length;
        const tailY = m.y - (m.vy / m.speed) * m.length;

        // 绘制流星尾迹（渐变线条）
        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.15, m.color + "20");
        gradient.addColorStop(0.4, m.color + "80");
        gradient.addColorStop(0.7, m.color + "cc");
        gradient.addColorStop(1, m.color);

        ctx.globalAlpha = m.opacity;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.thickness;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // 流星外层辉光（更宽更柔和的光晕）
        ctx.globalAlpha = m.opacity * 0.25;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.thickness * 4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // 流星头部辉光
        ctx.globalAlpha = m.opacity * 0.8;
        const headGlow = ctx.createRadialGradient(
          m.x, m.y, 0,
          m.x, m.y, m.thickness * 8
        );
        headGlow.addColorStop(0, "#ffffff");
        headGlow.addColorStop(0.2, m.color);
        headGlow.addColorStop(0.5, m.color + "60");
        headGlow.addColorStop(1, "transparent");
        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initStars, spawnMeteor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
