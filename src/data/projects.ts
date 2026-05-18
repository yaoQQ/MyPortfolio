export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  description: string;
  techStack: string[];
  highlights: string[];
  images: string[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    id: "wo-yao-dang-lao-zu",
    title: "《我要当老祖》",
    subtitle: "修仙题材网游",
    category: "网游",
    status: "上线阶段",
    description:
      "《我要当老祖》是一款修仙题材网游，核心玩法涵盖背包乱斗、多流派弟子收集培养与宠物养成系统。项目处于上线阶段，需要在较短时间内搭建高可扩展的核心玩法框架，同时保证复杂系统的稳定性与可维护性。\n\n作为主程和技术负责人，负责整体技术架构设计与核心系统开发。采用Unity3D DOTS/ECS架构实现高性能实体管理，结合HybridCLR实现C#热更新，大幅提升开发迭代效率。设计并实现了背包乱斗、弟子收集培养、宠物养成等核心玩法系统，以及竞技场、弹幕、竞猜等社交竞技系统。\n\n在性能优化方面，针对大规模单位同屏渲染进行了深度优化，确保复杂场景下帧率稳定。通过Addressables资源管理系统实现了资源按需加载与内存优化，有效控制了包体大小与运行时内存占用。UGUI界面的深度定制与优化保证了多分辨率适配与流畅的交互体验。",
    techStack: ["Unity3D", "C#", "DOTS/ECS", "HybridCLR", "UGUI", "Addressables"],
    highlights: [
      "DOTS/ECS架构实现高性能实体管理",
      "HybridCLR热更新方案提升迭代效率",
      "背包乱斗核心玩法系统设计",
      "多流派弟子收集培养与宠物养成系统",
      "竞技场、弹幕、竞猜社交竞技系统",
      "Addressables资源管理与内存优化",
    ],
    images: [
      "/images/image1.jpg",
      "/images/image2.jpg",
      "/images/image3.jpg",
      "/images/image4.jpg",
      "/images/image5.jpg",
    ],
    coverImage: "/images/image1.jpg",
  },
  {
    id: "you-you-esports",
    title: "优优商业电竞平台 & 智能硬件",
    subtitle: "B2C商业电竞生态",
    category: "平台/硬件",
    status: "已上线",
    description:
      "公司布局B2C商业电竞生态，需要同时推进移动端平台、线下智能硬件（口红机、体感广告一体机）与微信小游戏矩阵。多端技术栈差异大，硬件设备对稳定性要求极高，且需要与支付、广告、地图等第三方系统深度整合。\n\n作为技术负责人，主导移动端电竞平台开发，整合口红机与体感广告一体机等线下智能硬件的SDK集成与通信方案。针对硬件设备的高稳定性需求，设计了完善的异常处理与自动恢复机制，确保7×24小时无人值守稳定运行。\n\n同时负责微信小游戏矩阵的技术选型与开发，实现了多款小游戏的快速开发与上线。在多平台适配方面，解决了Android/iOS原生开发与Unity的深度整合问题，实现了支付、广告、地图等第三方SDK的统一接入层，大幅降低了新SDK的接入成本。",
    techStack: [
      "Unity3D",
      "C#",
      "Android/iOS原生",
      "微信小游戏SDK",
      "硬件SDK集成",
    ],
    highlights: [
      "B2C商业电竞生态全链路技术架构",
      "口红机SDK集成与7×24小时稳定运行",
      "体感广告一体机交互方案设计",
      "微信小游戏矩阵快速开发与上线",
      "支付/广告/地图第三方SDK统一接入层",
      "Android/iOS原生与Unity深度整合",
    ],
    images: [
      "/images/image6.jpg",
      "/images/image7.jpeg",
    ],
    coverImage: "/images/image6.jpg",
  },
  {
    id: "yin-he-lue-duo-zhe",
    title: "《银河掠夺者》",
    subtitle: "星战RTS & 通用AR框架",
    category: "手游/AR",
    status: "已上线",
    description:
      "《银河掠夺者》是一款以宇宙星球掠夺战争为背景的星战RTS手游，由玩家划线操控星际舰队进行战斗。公司同时希望布局AR新技术，成立专项AR项目组，需要构建可复用的AR技术框架供全公司各项目使用。\n\n在银河掠夺者项目中，负责核心战斗系统与RTS操控方案的开发，实现了流畅的划线操控与舰队AI行为系统。采用DOTS/ECS架构处理大规模星际单位的管理与渲染，确保战斗场景的流畅体验。\n\n在AR技术框架方面，主导设计了可复用的AR技术架构，基于ARKit/ARCore实现了跨平台的AR基础能力层。框架包含平面检测、图像识别、摄像头实时成像融合等核心模块，并提供了统一的API接口供各项目快速接入。状态/帧同步方案确保了多人AR交互的一致性与实时性。",
    techStack: [
      "Unity3D",
      "C#",
      "ARKit/ARCore",
      "DOTS/ECS",
      "状态/帧同步",
    ],
    highlights: [
      "星战RTS划线操控与舰队AI系统",
      "DOTS/ECS大规模星际单位管理",
      "可复用AR技术框架架构设计",
      "ARKit/ARCore跨平台AR基础能力层",
      "摄像头实时成像融合技术",
      "状态/帧同步多人AR交互方案",
    ],
    images: [
      "/images/image21.jpeg",
      "/images/image22.jpeg",
      "/images/image23.jpeg",
      "/images/image24.jpeg",
    ],
    coverImage: "/images/image21.jpeg",
  },
  {
    id: "playhut",
    title: "PlayHut电子玩具 & 海外游戏",
    subtitle: "美国专利电子玩具SDK集成+海外游戏开发",
    category: "硬件/海外",
    status: "已上线",
    description:
      "PlayHut是美国知名电子玩具品牌，需要将Unity游戏与实体电子玩具进行深度整合，实现物理玩具与数字游戏的联动交互。项目涉及美国专利电子玩具SDK的集成开发，以及面向海外市场的游戏产品开发。\n\n负责电子玩具SDK的Unity端集成开发，实现了物理玩具与数字游戏的实时通信与联动控制。针对玩具硬件的特殊交互需求，设计了低延迟的蓝牙通信方案与可靠的指令协议，确保物理操作与游戏反馈的即时同步。\n\n同时负责海外游戏产品的开发与多平台发布，解决了Android/iOS原生开发、App Store/Google Play上架以及海外SDK集成（广告、支付、数据分析等）等复杂技术问题。通过C++与Objective-C的混合编程，实现了Unity与原生平台的高效交互。",
    techStack: [
      "Unity3D",
      "C++",
      "Objective-C",
      "Android/iOS原生",
      "海外SDK集成",
    ],
    highlights: [
      "美国专利电子玩具SDK集成开发",
      "物理玩具与数字游戏实时联动",
      "低延迟蓝牙通信与可靠指令协议",
      "海外游戏多平台发布（App Store/Google Play）",
      "C++/Objective-C混合编程与Unity交互",
      "海外广告/支付/数据分析SDK集成",
    ],
    images: [],
    coverImage: "",
  },
  {
    id: "dou-zhan-feng-shen",
    title: "《斗战封神》",
    subtitle: "封神题材动作卡牌手游",
    category: "手游",
    status: "稳定运营",
    description:
      "《斗战封神》是一款以商末周初伐纣为背景的封神动作横版卡牌手游，项目处于稳定运营期，需要持续开发新系统并优化现有模块性能。前后端协作紧密，数据一致性与网络同步是核心挑战。\n\n使用Unity3D（C#）与Java进行前后端开发，主要负责佣兵系统、宝藏挖掘系统、PVP/PVE战斗系统等核心模块的开发、维护与性能优化。在佣兵系统中，设计了灵活的佣兵属性与技能配置框架，支持运营快速配置新佣兵；宝藏挖掘系统实现了丰富的探索与奖励机制。\n\n在战斗系统方面，负责PVP/PVE战斗逻辑的实现与优化，通过状态同步方案确保多人战斗的数据一致性。针对NGUI框架进行了深度定制与性能优化，解决了复杂UI层级下的渲染效率问题。同时负责与Java后端的协议对接与数据校验，确保前后端数据一致性。",
    techStack: ["Unity3D", "C#", "Java后端", "NGUI", "状态同步"],
    highlights: [
      "佣兵系统灵活配置框架设计",
      "宝藏挖掘探索与奖励机制",
      "PVP/PVE战斗系统状态同步",
      "NGUI深度定制与性能优化",
      "前后端协议对接与数据一致性",
      "稳定运营期持续开发与性能优化",
    ],
    images: [
      "/images/image16.jpg",
      "/images/image17.jpeg",
      "/images/image18.jpeg",
      "/images/image19.jpeg",
      "/images/image20.jpeg",
    ],
    coverImage: "/images/image16.jpg",
  },
  {
    id: "xiao-ao-xian-tu",
    title: "《笑傲仙途》",
    subtitle: "3D MMORPG页游",
    category: "页游",
    status: "已运营",
    description:
      "《笑傲仙途》是一款暗黑西游风的大型3D MMORPG页游，采用Flash 3D技术和自研引擎开发。项目在视觉表现与技术架构上都有较高要求，是公司核心产品之一。\n\n负责3D场景渲染与自研引擎的核心模块开发，针对暗黑西游风格进行了大量Shader与特效的定制开发，实现了独特的视觉风格。自研引擎在Flash 3D基础上进行了深度扩展，提升了渲染效率与表现力。\n\n在性能优化方面，针对大型3D场景的渲染进行了LOD、遮挡剔除等多层级优化，确保复杂场景下的流畅运行。与Java后端团队协作实现了稳定的状态同步方案，支撑了大规模玩家同时在线的游戏体验。",
    techStack: ["Flash/AS3", "Flash 3D", "自研引擎", "Java后端"],
    highlights: [
      "暗黑西游风Shader与特效定制",
      "自研引擎核心模块开发",
      "Flash 3D渲染效率与表现力提升",
      "大型3D场景LOD与遮挡剔除优化",
      "大规模在线状态同步方案",
      "独特视觉风格技术实现",
    ],
    images: [
      "/images/image8.jpg",
      "/images/image9.jpeg",
      "/images/image10.jpeg",
      "/images/image11.jpeg",
      "/images/image12.jpeg",
    ],
    coverImage: "/images/image8.jpg",
  },
  {
    id: "ying-xiong-wang-zuo",
    title: "《英雄王座》",
    subtitle: "MMORPG页游",
    category: "页游",
    status: "已运营",
    description:
      "《英雄王座》是一款大型MMORPG页游，基于Flash/AS3技术栈与Java后端开发。作为早期参与的核心项目，积累了丰富的大型多人在线游戏开发经验。\n\n在项目中负责前端核心模块的开发，包括角色系统、装备系统、副本系统等MMORPG核心玩法的实现。使用Flash 3D技术实现了丰富的3D场景渲染与角色表现，针对Flash运行时的性能瓶颈进行了深度优化。\n\n在前后端协作方面，与Java后端团队紧密配合，设计并实现了高效的网络通信协议，确保大规模玩家在线时的数据同步与服务器稳定性。通过状态同步方案解决了MMORPG中角色位置、战斗状态等关键数据的一致性问题。",
    techStack: ["Flash/AS3", "Flash 3D", "Java后端"],
    highlights: [
      "大型MMORPG核心玩法系统开发",
      "Flash 3D场景渲染与角色表现",
      "Flash运行时性能深度优化",
      "高效网络通信协议设计",
      "大规模在线状态同步方案",
      "角色/装备/副本系统架构设计",
    ],
    images: [
      "/images/image_40.jpg",
      "/images/image_41.jpg",
      "/images/image_42.jpg",
    ],
    coverImage: "/images/image_40.jpg",
  },
  {
    id: "meng-xiang-san-guo",
    title: "《萌想三国》",
    subtitle: "ARPG手游",
    category: "手游",
    status: "已运营",
    description:
      "《萌想三国》是一款以三国为背景的ARPG手机游戏，采用Unity3D与FairyGUI进行开发。项目在UI表现与战斗体验上有较高要求，需要实现流畅的动作战斗与丰富的角色养成系统。\n\n负责核心战斗系统与角色养成模块的开发，实现了流畅的ARPG战斗操控与技能系统。使用FairyGUI框架进行UI系统开发，充分发挥了FairyGUI在动画编辑与组件复用方面的优势，快速实现了复杂的UI交互效果。\n\n在性能优化方面，针对移动端硬件特性进行了渲染管线优化与内存管理，确保中低端设备也能流畅运行。与Java后端协作实现了可靠的状态同步方案，保障了多人在线交互的数据一致性。",
    techStack: ["Unity3D", "C#", "Java后端", "FairyGUI"],
    highlights: [
      "ARPG战斗操控与技能系统",
      "FairyGUI动画编辑与组件复用",
      "移动端渲染管线优化",
      "中低端设备内存管理优化",
      "角色养成系统架构设计",
      "前后端状态同步方案",
    ],
    images: [
      "/images/image13.jpeg",
      "/images/image14.jpeg",
      "/images/image15.jpeg",
    ],
    coverImage: "/images/image13.jpeg",
  },
  {
    id: "independent-games",
    title: "独立游戏作品",
    subtitle: "多人联网太空射击RTS + 微信小游戏 + Game Jam",
    category: "独立游戏",
    status: "已上线",
    description:
      "独立游戏作品集包含三个子项目：多人联网太空射击RTS、《土豆勇者》微信小游戏以及《银河漫步者》Game Jam作品。作为主程和技术负责人，负责整体技术架构设计、核心系统开发、多平台适配及上线发布全流程。\n\n多人联网太空射击RTS项目采用Unity DOTS/ECS架构实现高性能实体管理，设计状态/帧同步混合方案支持100人联网对战，实现上万飞船单位同屏渲染优化。项目成功支持100人联网对战与上万单位同屏，验证了DOTS/ECS在大规模实体管理场景下的卓越性能表现。\n\n《土豆勇者》是独立开发的微信小游戏，独立完成策划、美术、程序设计与上线运营。采用Unity2D方案开发，包体优化至5MB以内，适配微信小游戏运行时性能约束，验证了单人开发完整游戏产品并获取平台认可的可行性。\n\n《银河漫步者》是独立开发的休闲小游戏，获Unity GameJam优秀奖及官方渠道推广。独立完成全部开发环节，获得平台认可和支持。",
    techStack: [
      "Unity3D",
      "DOTS/ECS",
      "状态/帧同步",
      "Unity2D",
      "微信小游戏",
    ],
    highlights: [
      "万级单位同屏渲染，帧率稳定30+FPS",
      "100人联网对战架构，支持PVP与协同PVE",
      "DOTS/ECS高性能实体管理架构",
      "独立完成2款游戏从0到上线全流程",
      "《土豆勇者》包体优化至5MB以内",
      "《银河漫步者》获Unity GameJam优秀奖",
    ],
    images: [
      "/images/image25.jpg",
      "/images/image26.jpg",
      "/images/image27.jpg",
      "/images/image28.jpg",
      "/images/image29.jpeg",
      "/images/image30.jpeg",
      "/images/image31.jpeg",
      "/images/image32.jpeg",
      "/images/image33.jpeg",
    ],
    coverImage: "/images/image25.jpg",
  },
];
