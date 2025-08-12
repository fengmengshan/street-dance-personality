// 完整的62道题目数据
export const fullQuestions = [
  // OPENNESS 开放性 (12题)
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
  },
  {
    id: '6',
    content: '我认为街舞应该保持传统，不需要太多创新',
    category: 'CREATIVE_EXPRESSION',
    dimension: 'OPENNESS',
    isReverse: true,
    danceStyles: ['LOCKING', 'POPPING'],
    scenarioType: 'SOCIAL',
    orderIndex: 6
  },
  {
    id: '7',
    content: '我喜欢探索不同文化背景的舞蹈风格',
    category: 'LEARNING_STYLE',
    dimension: 'OPENNESS',
    isReverse: false,
    danceStyles: ['WAACKING', 'VOGUING', 'HOUSE'],
    scenarioType: 'LEARNING',
    orderIndex: 7
  },
  {
    id: '8',
    content: '我更喜欢在熟悉的音乐下跳舞，这样更有安全感',
    category: 'MUSIC_SENSITIVITY',
    dimension: 'OPENNESS',
    isReverse: true,
    danceStyles: ['HIPHOP', 'POPPING'],
    scenarioType: 'PRACTICE',
    orderIndex: 8
  },
  {
    id: '9',
    content: '我经常会想象如何改进现有的舞蹈动作',
    category: 'CREATIVE_EXPRESSION',
    dimension: 'OPENNESS',
    isReverse: false,
    danceStyles: ['ANIMATION', 'ROBOT'],
    scenarioType: 'PRACTICE',
    orderIndex: 9
  },
  {
    id: '10',
    content: '在团队编舞时，我更倾向于使用大家都熟悉的动作',
    category: 'TEAM_COLLABORATION',
    dimension: 'OPENNESS',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 10
  },
  {
    id: '11',
    content: '我喜欢尝试将街舞与其他艺术形式结合',
    category: 'CREATIVE_EXPRESSION',
    dimension: 'OPENNESS',
    isReverse: false,
    danceStyles: ['HOUSE', 'VOGUING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 11
  },
  {
    id: '12',
    content: '我认为每种舞蹈风格都应该保持其原有的纯粹性',
    category: 'LEARNING_STYLE',
    dimension: 'OPENNESS',
    isReverse: true,
    danceStyles: ['LOCKING', 'POPPING', 'BREAKING'],
    scenarioType: 'SOCIAL',
    orderIndex: 12
  },

  // CONSCIENTIOUSNESS 尽责性 (12题)
  {
    id: '13',
    content: '我会制定详细的练习计划并严格执行',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION', 'ROBOT'],
    scenarioType: 'PRACTICE',
    orderIndex: 13
  },
  {
    id: '14',
    content: '在学习新动作时，我会反复练习直到完全掌握',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['BREAKING', 'LOCKING'],
    scenarioType: 'PRACTICE',
    orderIndex: 14
  },
  {
    id: '15',
    content: '我经常因为练习而忘记时间',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'PRACTICE',
    orderIndex: 15
  },
  {
    id: '16',
    content: '我更喜欢随性的练习，不喜欢被计划束缚',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE'],
    scenarioType: 'PRACTICE',
    orderIndex: 16
  },
  {
    id: '17',
    content: '在团队排练中，我总是准时到达并做好准备',
    category: 'TEAM_COLLABORATION',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE', 'LOCKING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 17
  },
  {
    id: '18',
    content: '我会仔细分析自己的舞蹈视频，找出需要改进的地方',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION', 'BREAKING'],
    scenarioType: 'PRACTICE',
    orderIndex: 18
  },
  {
    id: '19',
    content: '我经常会因为一个动作不够完美而重复练习很多遍',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['POPPING', 'ROBOT', 'ANIMATION'],
    scenarioType: 'PRACTICE',
    orderIndex: 19
  },
  {
    id: '20',
    content: '我觉得差不多就行了，不需要追求完美',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE'],
    scenarioType: 'PRACTICE',
    orderIndex: 20
  },
  {
    id: '21',
    content: '在Battle前，我会充分准备和练习',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['BREAKING', 'POPPING', 'LOCKING'],
    scenarioType: 'BATTLE',
    orderIndex: 21
  },
  {
    id: '22',
    content: '我会记录自己的练习进度和改进点',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'PRACTICE',
    orderIndex: 22
  },
  {
    id: '23',
    content: '我更喜欢即兴发挥，不喜欢过度准备',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 23
  },
  {
    id: '24',
    content: '我会设定明确的舞蹈学习目标',
    category: 'LEARNING_STYLE',
    dimension: 'CONSCIENTIOUSNESS',
    isReverse: false,
    danceStyles: ['BREAKING', 'POPPING'],
    scenarioType: 'LEARNING',
    orderIndex: 24
  },

  // EXTRAVERSION 外向性 (13题)
  {
    id: '25',
    content: '在Cypher中，我喜欢第一个进圈跳舞',
    category: 'CYPHER_INTERACTION',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['HIPHOP', 'BREAKING', 'KRUMP'],
    scenarioType: 'CYPHER',
    orderIndex: 25
  },
  {
    id: '26',
    content: '我享受在众人面前表演的感觉',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['BREAKING', 'KRUMP', 'VOGUING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 26
  },
  {
    id: '27',
    content: '我更喜欢独自练习，不喜欢被人观看',
    category: 'LEARNING_STYLE',
    dimension: 'EXTRAVERSION',
    isReverse: true,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'PRACTICE',
    orderIndex: 27
  },
  {
    id: '28',
    content: '在Battle中，我会主动挑战更强的对手',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['BREAKING', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 28
  },
  {
    id: '29',
    content: '我喜欢与其他舞者交流和分享经验',
    category: 'TEAM_COLLABORATION',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE', 'LOCKING'],
    scenarioType: 'SOCIAL',
    orderIndex: 29
  },
  {
    id: '30',
    content: '在团队中，我更愿意做幕后工作',
    category: 'TEAM_COLLABORATION',
    dimension: 'EXTRAVERSION',
    isReverse: true,
    danceStyles: ['HOUSE', 'ANIMATION'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 30
  },
  {
    id: '31',
    content: '我经常主动组织舞蹈活动或聚会',
    category: 'TEAM_COLLABORATION',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE'],
    scenarioType: 'SOCIAL',
    orderIndex: 31
  },
  {
    id: '32',
    content: '我在大型活动中会感到紧张和不自在',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'EXTRAVERSION',
    isReverse: true,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 32
  },
  {
    id: '33',
    content: '我喜欢成为团队的焦点和中心',
    category: 'TEAM_COLLABORATION',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['BREAKING', 'KRUMP', 'VOGUING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 33
  },
  {
    id: '34',
    content: '我更喜欢小规模的舞蹈聚会',
    category: 'CYPHER_INTERACTION',
    dimension: 'EXTRAVERSION',
    isReverse: true,
    danceStyles: ['HOUSE', 'WAACKING'],
    scenarioType: 'SOCIAL',
    orderIndex: 34
  },
  {
    id: '35',
    content: '我会主动邀请新人加入我们的舞蹈圈子',
    category: 'TEAM_COLLABORATION',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE', 'LOCKING'],
    scenarioType: 'SOCIAL',
    orderIndex: 35
  },
  {
    id: '36',
    content: '在Cypher中，我更喜欢观看别人跳舞',
    category: 'CYPHER_INTERACTION',
    dimension: 'EXTRAVERSION',
    isReverse: true,
    danceStyles: ['ANIMATION', 'ROBOT'],
    scenarioType: 'CYPHER',
    orderIndex: 36
  },
  {
    id: '37',
    content: '我享受与观众的互动和反馈',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'EXTRAVERSION',
    isReverse: false,
    danceStyles: ['BREAKING', 'KRUMP', 'VOGUING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 37
  },

  // AGREEABLENESS 宜人性 (12题)
  {
    id: '38',
    content: '在Cypher中，我会鼓励和支持其他舞者',
    category: 'CYPHER_INTERACTION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE', 'LOCKING'],
    scenarioType: 'CYPHER',
    orderIndex: 38
  },
  {
    id: '39',
    content: '我认为在Battle中使用心理战术是必要的',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'AGREEABLENESS',
    isReverse: true,
    danceStyles: ['BREAKING', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 39
  },
  {
    id: '40',
    content: '我喜欢帮助新手学习舞蹈',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['HIPHOP', 'HOUSE', 'LOCKING'],
    scenarioType: 'LEARNING',
    orderIndex: 40
  },
  {
    id: '41',
    content: '在团队编舞中，我更关注整体效果而不是个人表现',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['HOUSE', 'WAACKING', 'VOGUING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 41
  },
  {
    id: '42',
    content: '我认为每个人都应该争取更多的表演机会',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: true,
    danceStyles: ['BREAKING', 'KRUMP'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 42
  },
  {
    id: '43',
    content: '我会主动分享自己的舞蹈技巧和经验',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['POPPING', 'LOCKING', 'ANIMATION'],
    scenarioType: 'LEARNING',
    orderIndex: 43
  },
  {
    id: '44',
    content: '在发生冲突时，我倾向于寻求和解',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['HOUSE', 'WAACKING'],
    scenarioType: 'SOCIAL',
    orderIndex: 44
  },
  {
    id: '45',
    content: '我认为竞争比合作更重要',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'AGREEABLENESS',
    isReverse: true,
    danceStyles: ['BREAKING', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 45
  },
  {
    id: '46',
    content: '我会考虑其他团队成员的感受和想法',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['HOUSE', 'HIPHOP'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 46
  },
  {
    id: '47',
    content: '我更愿意让别人先展示，自己后上',
    category: 'CYPHER_INTERACTION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['HOUSE', 'WAACKING'],
    scenarioType: 'CYPHER',
    orderIndex: 47
  },
  {
    id: '48',
    content: '我认为保护自己的独特技巧很重要',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: true,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'LEARNING',
    orderIndex: 48
  },
  {
    id: '49',
    content: '我喜欢创造和谐的团队氛围',
    category: 'TEAM_COLLABORATION',
    dimension: 'AGREEABLENESS',
    isReverse: false,
    danceStyles: ['HOUSE', 'HIPHOP', 'LOCKING'],
    scenarioType: 'SOCIAL',
    orderIndex: 49
  },

  // NEUROTICISM 神经质 (13题)
  {
    id: '50',
    content: '在重要的Battle前，我会感到非常紧张',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'NEUROTICISM',
    isReverse: false,
    danceStyles: ['BREAKING', 'POPPING', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 50
  },
  {
    id: '51',
    content: '即使在压力下，我也能保持冷静',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'NEUROTICISM',
    isReverse: true,
    danceStyles: ['BREAKING', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 51
  },
  {
    id: '52',
    content: '当我的动作出错时，我会很长时间都在想这件事',
    category: 'LEARNING_STYLE',
    dimension: 'NEUROTICISM',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'PRACTICE',
    orderIndex: 52
  },
  {
    id: '53',
    content: '我很容易从失败中恢复过来',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'NEUROTICISM',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE', 'KRUMP'],
    scenarioType: 'BATTLE',
    orderIndex: 53
  },
  {
    id: '54',
    content: '当别人批评我的舞蹈时，我会感到很沮丧',
    category: 'TEAM_COLLABORATION',
    dimension: 'NEUROTICISM',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'LEARNING',
    orderIndex: 54
  },
  {
    id: '55',
    content: '我能够很好地处理表演中的突发状况',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'NEUROTICISM',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE', 'BREAKING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 55
  },
  {
    id: '56',
    content: '我经常担心自己的舞蹈水平不够好',
    category: 'LEARNING_STYLE',
    dimension: 'NEUROTICISM',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION', 'ROBOT'],
    scenarioType: 'PRACTICE',
    orderIndex: 56
  },
  {
    id: '57',
    content: '我对自己的舞蹈能力很有信心',
    category: 'BATTLE_PERFORMANCE',
    dimension: 'NEUROTICISM',
    isReverse: true,
    danceStyles: ['BREAKING', 'KRUMP', 'VOGUING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 57
  },
  {
    id: '58',
    content: '当音乐突然变化时，我会感到慌乱',
    category: 'MUSIC_SENSITIVITY',
    dimension: 'NEUROTICISM',
    isReverse: false,
    danceStyles: ['POPPING', 'ANIMATION'],
    scenarioType: 'CYPHER',
    orderIndex: 58
  },
  {
    id: '59',
    content: '我能够很好地适应不同的音乐风格',
    category: 'MUSIC_SENSITIVITY',
    dimension: 'NEUROTICISM',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE', 'BREAKING'],
    scenarioType: 'CYPHER',
    orderIndex: 59
  },
  {
    id: '60',
    content: '我经常因为练习不够而感到焦虑',
    category: 'LEARNING_STYLE',
    dimension: 'NEUROTICISM',
    isReverse: false,
    danceStyles: ['POPPING', 'BREAKING'],
    scenarioType: 'PRACTICE',
    orderIndex: 60
  },
  {
    id: '61',
    content: '我很少因为舞蹈相关的事情而感到压力',
    category: 'LEARNING_STYLE',
    dimension: 'NEUROTICISM',
    isReverse: true,
    danceStyles: ['HIPHOP', 'HOUSE'],
    scenarioType: 'PRACTICE',
    orderIndex: 61
  },
  {
    id: '62',
    content: '在团队表演中，我担心自己会拖累整个团队',
    category: 'TEAM_COLLABORATION',
    dimension: 'NEUROTICISM',
    isReverse: false,
    danceStyles: ['HOUSE', 'WAACKING'],
    scenarioType: 'PERFORMANCE',
    orderIndex: 62
  }
]