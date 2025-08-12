// 完整的12种人格类型数据
export const fullPersonalityTypes = [
  {
    id: 'code_player',
    name: '暗号玩家',
    nickname: 'The Code Breaker',
    description: '善于解读音乐中的隐藏节拍和情感密码，用身体语言诠释复杂的音乐结构。你总能在别人听不到的地方找到节拍的秘密。',
    characteristics: [
      '音乐敏感度极高',
      '善于发现细节',
      '喜欢挑战复杂节拍',
      '独特的音乐理解力',
      '技术导向的学习方式'
    ],
    strengths: [
      '节拍感强',
      '创意独特',
      '技术精湛',
      '分析能力强',
      '持续改进'
    ],
    recommendedStyles: ['POPPING', 'LOCKING', 'ANIMATION'],
    developmentSuggestions: [
      '尝试更多音乐风格',
      '参与更多即兴创作',
      '分享技巧心得',
      '与其他舞者交流经验'
    ],
    avatarUrl: '/avatars/code-player.svg',
    colorScheme: {
      primary: '#8B5CF6',
      secondary: '#EC4899',
      accent: '#06B6D4'
    },
    dimensionWeights: {
      openness: 0.9,
      conscientiousness: 0.8,
      extraversion: 0.4,
      agreeableness: 0.6,
      neuroticism: 0.3
    }
  },
  {
    id: 'freestyle_poet',
    name: '即兴诗人',
    nickname: 'The Freestyle Poet',
    description: '用身体书写无声的诗歌，每一个动作都是情感的自然流露。你的舞蹈就像即兴的诗歌，充满了灵感和创造力。',
    characteristics: [
      '极强的即兴能力',
      '情感表达丰富',
      '创造力无限',
      '善于情感共鸣',
      '自由奔放的风格'
    ],
    strengths: [
      '即兴创作',
      '情感表达',
      '艺术感知',
      '灵感迸发',
      '独特风格'
    ],
    recommendedStyles: ['HIPHOP', 'HOUSE', 'KRUMP'],
    developmentSuggestions: [
      '参加更多Cypher活动',
      '尝试不同音乐类型',
      '与其他艺术形式结合',
      '记录创作灵感'
    ],
    avatarUrl: '/avatars/freestyle-poet.svg',
    colorScheme: {
      primary: '#06FFA5',
      secondary: '#FF3366',
      accent: '#FFD23F'
    },
    dimensionWeights: {
      openness: 0.95,
      conscientiousness: 0.5,
      extraversion: 0.7,
      agreeableness: 0.8,
      neuroticism: 0.4
    }
  },
  {
    id: 'no_map_explorer',
    name: '无地图探险家',
    nickname: 'The Pathfinder',
    description: '永远在寻找未知的舞蹈领域，不害怕尝试新的风格和技巧。你是街舞世界的探险家，总是第一个踏入未知领域。',
    characteristics: [
      '勇于尝试新事物',
      '适应能力强',
      '好奇心旺盛',
      '不畏惧失败',
      '开拓精神'
    ],
    strengths: [
      '创新能力',
      '适应性强',
      '学习能力',
      '勇气十足',
      '视野开阔'
    ],
    recommendedStyles: ['BREAKING', 'VOGUING', 'WAACKING'],
    developmentSuggestions: [
      '尝试融合不同舞种',
      '参与国际交流',
      '学习舞蹈历史',
      '创造新的动作'
    ],
    avatarUrl: '/avatars/no-map-explorer.svg',
    colorScheme: {
      primary: '#1A8FE3',
      secondary: '#06FFA5',
      accent: '#FF6B35'
    },
    dimensionWeights: {
      openness: 0.95,
      conscientiousness: 0.6,
      extraversion: 0.8,
      agreeableness: 0.7,
      neuroticism: 0.2
    }
  },
  {
    id: 'beat_hunter',
    name: '节拍猎人',
    nickname: 'The Beat Hunter',
    description: '对音乐有着超乎常人的敏感度，能够捕捉到最细微的节拍变化。你的身体就是最精准的节拍器。',
    characteristics: [
      '音乐感知力超强',
      '节拍把握精准',
      '听觉敏锐',
      '韵律感强',
      '音乐理解深刻'
    ],
    strengths: [
      '节拍感',
      '音乐性',
      '精准度',
      '韵律控制',
      '听觉分析'
    ],
    recommendedStyles: ['POPPING', 'ROBOT', 'ANIMATION'],
    developmentSuggestions: [
      '学习音乐制作',
      '研究不同音乐风格',
      '与音乐人合作',
      '开发音乐感知训练'
    ],
    avatarUrl: '/avatars/beat-hunter.svg',
    colorScheme: {
      primary: '#FFD23F',
      secondary: '#FF6B35',
      accent: '#004E89'
    },
    dimensionWeights: {
      openness: 0.8,
      conscientiousness: 0.9,
      extraversion: 0.5,
      agreeableness: 0.6,
      neuroticism: 0.3
    }
  },
  {
    id: 'mirror_magician',
    name: '镜面魔术师',
    nickname: 'The Mirror Magician',
    description: '拥有惊人的模仿和学习能力，能够快速掌握各种舞蹈技巧。你就像一面魔镜，能够完美复制并改进任何动作。',
    characteristics: [
      '模仿能力超强',
      '学习速度快',
      '观察力敏锐',
      '技巧掌握精准',
      '善于改进动作'
    ],
    strengths: [
      '快速学习',
      '精确模仿',
      '技巧掌握',
      '动作分析',
      '持续改进'
    ],
    recommendedStyles: ['LOCKING', 'WAACKING', 'VOGUING'],
    developmentSuggestions: [
      '学习经典动作',
      '研究大师作品',
      '开发教学能力',
      '创造个人风格'
    ],
    avatarUrl: '/avatars/mirror-magician.svg',
    colorScheme: {
      primary: '#004E89',
      secondary: '#1A8FE3',
      accent: '#06FFA5'
    },
    dimensionWeights: {
      openness: 0.7,
      conscientiousness: 0.9,
      extraversion: 0.6,
      agreeableness: 0.8,
      neuroticism: 0.3
    }
  },
  {
    id: 'energy_transmitter',
    name: '能量传递者',
    nickname: 'The Energy Transmitter',
    description: '拥有强大的感染力，能够将自己的热情和能量传递给周围的每一个人。你的舞蹈就像电流，点燃整个舞池。',
    characteristics: [
      '感染力极强',
      '热情洋溢',
      '善于激励他人',
      '舞台表现力强',
      '正能量满满'
    ],
    strengths: [
      '感染力',
      '表现力',
      '激励能力',
      '团队凝聚',
      '正面影响'
    ],
    recommendedStyles: ['HIPHOP', 'KRUMP', 'HOUSE'],
    developmentSuggestions: [
      '参与更多表演',
      '发展领导能力',
      '组织社区活动',
      '传播街舞文化'
    ],
    avatarUrl: '/avatars/energy-transmitter.svg',
    colorScheme: {
      primary: '#FF3366',
      secondary: '#FFD23F',
      accent: '#06FFA5'
    },
    dimensionWeights: {
      openness: 0.8,
      conscientiousness: 0.7,
      extraversion: 0.95,
      agreeableness: 0.9,
      neuroticism: 0.2
    }
  },
  {
    id: 'silent_observer',
    name: '静默观察家',
    nickname: 'The Silent Observer',
    description: '善于观察和分析，虽然不常表达但内心世界丰富。你的舞蹈充满了深度和内涵，每个动作都经过深思熟虑。',
    characteristics: [
      '观察力敏锐',
      '分析能力强',
      '内心世界丰富',
      '思考深入',
      '表达含蓄'
    ],
    strengths: [
      '深度思考',
      '精准分析',
      '内在力量',
      '独特视角',
      '稳定发挥'
    ],
    recommendedStyles: ['ANIMATION', 'ROBOT', 'POPPING'],
    developmentSuggestions: [
      '增加表达机会',
      '参与小组活动',
      '分享观察心得',
      '发展个人风格'
    ],
    avatarUrl: '/avatars/silent-observer.svg',
    colorScheme: {
      primary: '#404040',
      secondary: '#1A8FE3',
      accent: '#FFD23F'
    },
    dimensionWeights: {
      openness: 0.8,
      conscientiousness: 0.8,
      extraversion: 0.3,
      agreeableness: 0.7,
      neuroticism: 0.4
    }
  },
  {
    id: 'team_glue',
    name: '团队粘合剂',
    nickname: 'The Team Glue',
    description: '天生的团队协调者，善于将不同的个性和风格融合在一起。你是团队的核心，让每个人都能发挥出最好的水平。',
    characteristics: [
      '协调能力强',
      '善于合作',
      '包容性强',
      '沟通能力好',
      '团队意识强'
    ],
    strengths: [
      '团队协作',
      '沟通协调',
      '包容理解',
      '冲突解决',
      '集体荣誉'
    ],
    recommendedStyles: ['HOUSE', 'HIPHOP', 'LOCKING'],
    developmentSuggestions: [
      '发展领导技能',
      '学习团队管理',
      '组织团队活动',
      '培养新人'
    ],
    avatarUrl: '/avatars/team-glue.svg',
    colorScheme: {
      primary: '#06FFA5',
      secondary: '#1A8FE3',
      accent: '#FFD23F'
    },
    dimensionWeights: {
      openness: 0.7,
      conscientiousness: 0.8,
      extraversion: 0.8,
      agreeableness: 0.95,
      neuroticism: 0.2
    }
  },
  {
    id: 'stage_conqueror',
    name: '舞台征服者',
    nickname: 'The Stage Conqueror',
    description: '天生的表演者，在舞台上光芒四射。你拥有强大的舞台魅力，能够征服任何观众的心。',
    characteristics: [
      '舞台表现力强',
      '自信满满',
      '魅力四射',
      '善于表演',
      '竞争意识强'
    ],
    strengths: [
      '舞台魅力',
      '表演能力',
      '自信心',
      '竞争力',
      '观众缘'
    ],
    recommendedStyles: ['BREAKING', 'KRUMP', 'VOGUING'],
    developmentSuggestions: [
      '参加更多比赛',
      '发展表演技巧',
      '学习舞台艺术',
      '培养个人品牌'
    ],
    avatarUrl: '/avatars/stage-conqueror.svg',
    colorScheme: {
      primary: '#FF6B35',
      secondary: '#FF3366',
      accent: '#FFD23F'
    },
    dimensionWeights: {
      openness: 0.8,
      conscientiousness: 0.7,
      extraversion: 0.95,
      agreeableness: 0.5,
      neuroticism: 0.3
    }
  },
  {
    id: 'skill_collector',
    name: '技巧收藏家',
    nickname: 'The Skill Collector',
    description: '对技巧有着近乎完美主义的追求，不断收集和完善各种舞蹈动作。你的技巧库就像一个宝藏，每个动作都经过精心雕琢。',
    characteristics: [
      '完美主义倾向',
      '技巧追求极致',
      '持续改进',
      '细节控制',
      '标准要求高'
    ],
    strengths: [
      '技巧精湛',
      '完美执行',
      '持续改进',
      '质量控制',
      '专业水准'
    ],
    recommendedStyles: ['POPPING', 'ANIMATION', 'ROBOT'],
    developmentSuggestions: [
      '平衡技巧与表达',
      '学习放松技巧',
      '尝试即兴创作',
      '分享技巧经验'
    ],
    avatarUrl: '/avatars/skill-collector.svg',
    colorScheme: {
      primary: '#004E89',
      secondary: '#FF6B35',
      accent: '#06FFA5'
    },
    dimensionWeights: {
      openness: 0.6,
      conscientiousness: 0.95,
      extraversion: 0.4,
      agreeableness: 0.6,
      neuroticism: 0.5
    }
  },
  {
    id: 'culture_bridge',
    name: '文化桥梁',
    nickname: 'The Culture Bridge',
    description: '善于融合不同的文化元素，创造出独特的舞蹈风格。你是连接传统与现代、东方与西方的桥梁。',
    characteristics: [
      '文化融合能力强',
      '创新思维',
      '包容性强',
      '视野开阔',
      '跨界能力'
    ],
    strengths: [
      '文化理解',
      '融合创新',
      '跨界思维',
      '包容心态',
      '独特视角'
    ],
    recommendedStyles: ['HOUSE', 'WAACKING', 'VOGUING'],
    developmentSuggestions: [
      '学习不同文化',
      '参与国际交流',
      '创造融合作品',
      '传播文化理念'
    ],
    avatarUrl: '/avatars/culture-bridge.svg',
    colorScheme: {
      primary: '#1A8FE3',
      secondary: '#FFD23F',
      accent: '#FF3366'
    },
    dimensionWeights: {
      openness: 0.95,
      conscientiousness: 0.7,
      extraversion: 0.7,
      agreeableness: 0.9,
      neuroticism: 0.3
    }
  },
  {
    id: 'soul_ferryman',
    name: '灵魂摆渡人',
    nickname: 'The Soul Ferryman',
    description: '用舞蹈传递情感和故事，能够触动人心最深处的情感。你的舞蹈就像摆渡船，载着观众的灵魂穿越情感的河流。',
    characteristics: [
      '情感表达深刻',
      '故事叙述能力强',
      '共情能力强',
      '艺术感知敏锐',
      '治愈力量'
    ],
    strengths: [
      '情感传递',
      '故事表达',
      '艺术感染',
      '心灵治愈',
      '深度共鸣'
    ],
    recommendedStyles: ['HIPHOP', 'HOUSE', 'KRUMP'],
    developmentSuggestions: [
      '发展叙事能力',
      '学习情感表达',
      '参与艺术创作',
      '帮助他人成长'
    ],
    avatarUrl: '/avatars/soul-ferryman.svg',
    colorScheme: {
      primary: '#FF3366',
      secondary: '#004E89',
      accent: '#06FFA5'
    },
    dimensionWeights: {
      openness: 0.9,
      conscientiousness: 0.6,
      extraversion: 0.6,
      agreeableness: 0.95,
      neuroticism: 0.4
    }
  }
]