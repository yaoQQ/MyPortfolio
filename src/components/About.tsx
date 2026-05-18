import ScrollReveal from "@/components/ScrollReveal";

const paragraphs = [
  "拥有10年游戏行业开发经验的Unity全栈工程师，职业生涯横跨页游、手游、智能硬件、独立游戏等多个领域。曾就职于千人规模游戏公司及美国外企，担任过技术负责人、项目组长等核心角色，主导完成从0到1的产品研发与上线。",
  "技术栈覆盖Unity全系列（DOTS/ECS、UGUI、NGUI、Shader、Addressables）、前后端开发（C#/Java/AS3/C++）、网络同步（状态同步/帧同步）、AR/VR、智能硬件SDK集成及多平台发布（App Store/Google Play/微信/抖音）。具备独立完成游戏策划、美术、程序全流程的能力，已独立开发并上线多款游戏。",
  "热衷于前沿技术探索，持续关注AI、DOTS、Unity、游戏发展等新技术方向，积极参与Unity官方内测与Game Jam活动。在多人联网、大规模单位同屏渲染、跨平台SDK集成等方向积累了丰富的实战经验。",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="text-cyber-blue font-orbitron">一、</span>
              个人简介
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full" />
          </div>
        </ScrollReveal>

        <div className="relative pl-8 border-l-2 border-cyber-blue/20">
          <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-cyber-blue via-cyber-purple to-transparent" />

          <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-cyber-blue shadow-[0_0_10px_#00d4ff]" />

          <div className="space-y-8">
            {paragraphs.map((text, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg pl-6 relative">
                  <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyber-purple/60" />
                  {text}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <div className="absolute -left-[5px] bottom-0 w-2.5 h-2.5 rounded-full bg-cyber-purple shadow-[0_0_10px_#a855f7]" />
        </div>
      </div>
    </section>
  );
}
