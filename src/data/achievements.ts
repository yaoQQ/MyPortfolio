export interface Achievement {
  title: string;
  description: string;
  type: "award" | "contribution" | "milestone";
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "万级单位同屏渲染",
    description:
      "在独立RTS项目中实现上万飞船单位同屏渲染，帧率稳定在30+FPS，充分验证DOTS/ECS架构在大规模实体管理场景下的性能优势。",
    type: "contribution",
    icon: "BarChart3",
  },
  {
    title: "100人联网对战架构",
    description:
      "设计并实现支持100人同时在线对战的网络架构，支持PVP与协同PVE模式，采用状态/帧同步混合方案确保数据一致性与实时性。",
    type: "milestone",
    icon: "Users",
  },
  {
    title: "独立完成2款游戏从0到上线",
    description:
      "独立完成《土豆勇者》微信小游戏与《银河漫步者》Game Jam作品的策划、美术、程序全流程开发，验证了单人开发完整游戏产品的可行性。",
    type: "milestone",
    icon: "Rocket",
  },
  {
    title: "Game Jam获奖作品获Unity官方渠道推广",
    description:
      "《银河漫步者》在Unity Game Jam中获奖，获得Unity官方渠道推广与认可，展示了独立游戏开发能力与创新设计思维。",
    type: "award",
    icon: "Trophy",
  },
  {
    title: "《土豆勇者》微信小游戏独立全流程开发",
    description:
      "独立完成策划、美术、程序设计与上线运营，采用Unity2D方案开发，包体优化至5MB以内，适配微信小游戏运行时性能约束。",
    type: "contribution",
    icon: "Gamepad2",
  },
  {
    title: "《银河漫步者》获Unity GameJam优秀奖",
    description:
      "独立完成全部开发环节的休闲小游戏，在Unity Game Jam中获优秀奖，获得官方渠道推广支持与社区认可。",
    type: "award",
    icon: "Award",
  },
  {
    title: "美国专利电子玩具SDK集成",
    description:
      "为PlayHut品牌集成美国专利电子玩具SDK，实现物理玩具与数字游戏的实时联动交互，设计低延迟蓝牙通信方案与可靠指令协议。",
    type: "contribution",
    icon: "BadgeCheck",
  },
  {
    title: "多平台发布经验",
    description:
      "具备App Store、Google Play、微信小游戏、抖音小游戏等多平台发布经验，熟悉各平台审核规范、SDK接入与技术适配要求。",
    type: "milestone",
    icon: "Globe",
  },
];
