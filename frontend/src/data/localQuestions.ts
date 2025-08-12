// 本地题目数据 - 用于纯前端版本
export const localQuestions = [
  {
    id: '1',
    content: '在Cypher中，我更喜欢尝试从未做过的新动作，即使可能失败',
    category: 'CYPHER_INTERACTION',
    dimension: 'OPENNESS',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE'],
    scenarioType: 'CYPHER',
    orderIndex: 1
  },
  {
    id: '2',
    content: '我经常会想象如何将不同舞种的元素融合在一起',
    category: 'CREATIVE_EXPRESSION',
    dimension: 'OPENNESS',
    isReverse: false,
    danceStyles: ['HIPHOP', 'BREAKING', 'HOUSE'],
    scenarioType: 'PRACTICE',
    orderIndex: 2
  },
  {
    id: '3',
    content: '听到新的音乐类型时，我会立刻想到如何用舞蹈来表达',
    category: 'MUSIC_SENSITIVITY',
    dimension: 'OPENNESS',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE', 'KRUMP'],
    scenarioType: 'LEARNING',
    orderIndex: 3
  },
  {
    id: '4',
    content: '我更愿意学习经典的、已经被验证的舞蹈动作',
    category: 'LEARNING_STYLE',
    dimension: 'OPENNESS',
    isReverse: true,
    danceStyles: ['LOCKING', 'POPPING'],
    scenarioType: 'LEARNING',
    orderIndex: 4
  },
  {
    id: '5',
    content: '在Battle中，我会尝试一些从未在公开场合展示过的动作',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'OPENNESS',
    isReverse: false,
    danceStyles: ['BREAKING', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 5
  }
  // ... 这里应该有62道题，为了简化只放了5道
]

// 本地人格类型数据
export const localPersonalityTypes = [
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
      primary: '#8B5CF6',
      secondary: '#EC4899',
      accent: '#06B6D4'
    }
  }
  // 这里应该有12种类型，为了简化只放了1种
]