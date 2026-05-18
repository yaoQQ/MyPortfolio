export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
  proficiency: number;
}

export const skills: SkillCategory[] = [
  {
    name: "游戏引擎",
    icon: "Gamepad2",
    items: [
      "Unity3D",
      "DOTS/ECS",
      "HybridCLR",
      "UGUI",
      "NGUI",
      "FairyGUI",
      "Addressables",
      "Flash/AS3",
    ],
    proficiency: 95,
  },
  {
    name: "编程语言",
    icon: "Code2",
    items: ["C#", "Java", "AS3", "C++", "JavaScript", "Python", "Objective-C"],
    proficiency: 90,
  },
  {
    name: "网络同步",
    icon: "Network",
    items: ["状态同步", "帧同步", "Netcode", "多人联网架构设计"],
    proficiency: 88,
  },
  {
    name: "图形渲染",
    icon: "Monitor",
    items: [
      "Shader开发",
      "特效制作",
      "大规模单位同屏渲染优化",
      "Flash 3D",
    ],
    proficiency: 85,
  },
  {
    name: "AR/VR",
    icon: "Scan",
    items: ["AR", "体感交互", "摄像头实时成像融合"],
    proficiency: 78,
  },
  {
    name: "热更新",
    icon: "Zap",
    items: ["ToLua", "XLua", "HybridCLR"],
    proficiency: 88,
  },
  {
    name: "平台与SDK",
    icon: "Smartphone",
    items: [
      "Android/iOS原生开发",
      "微信/抖音小游戏",
      "App Store/Google Play",
      "海外SDK集成",
    ],
    proficiency: 85,
  },
  {
    name: "智能硬件",
    icon: "Cpu",
    items: ["电子玩具SDK集成（美国专利）", "口红机", "体感广告一体机"],
    proficiency: 80,
  },
  {
    name: "服务端",
    icon: "Server",
    items: ["Java后端", "Protobuf", "MySQL", "UOS云/阿里云部署", "NetCode"],
    proficiency: 75,
  },
  {
    name: "工具与AI",
    icon: "Sparkles",
    items: [
      "Vibe Coding",
      "AI自动化",
      "Photoshop",
      "3D建模基础",
      "AIGC工具集",
      "Unity编辑器工具开发",
    ],
    proficiency: 82,
  },
];
