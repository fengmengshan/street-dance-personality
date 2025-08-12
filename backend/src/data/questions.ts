import { Question, QuestionCategory, PersonalityDimension, DanceStyle, ScenarioType } from '../types'

export const questions: Omit<Question, 'id'>[] = [
  // OPENNESS 开放性 (12题)
  {
    content: '在Cypher中，我更喜欢尝试从未做过的新动作，即使可能失败',
    category: QuestionCategory.CYPHER_INTERACTION,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE],
    scenarioType: ScenarioType.CYPHER,
    orderIndex: 1
  },
  {
    content: '我经常会想象如何将不同舞种的元素融合在一起',
    category: QuestionCategory.CREATIVE_EXPRESSION,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.BREAKING, DanceStyle.HOUSE],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 2
  },
  {
    content: '听到新的音乐类型时，我会立刻想到如何用舞蹈来表达',
    category: QuestionCategory.MUSIC_SENSITIVITY,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.KRUMP],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 3
  },
  {
    content: '我更愿意学习经典的、已经被验证的舞蹈动作',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: true,
    danceStyles: [DanceStyle.LOCKING, DanceStyle.POPPING],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 4
  },
  {
    content: '在Battle中，我会尝试一些从未在公开场合展示过的动作',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 5
  },
  {
    content: '我认为街舞应该保持传统，不需要太多创新',
    category: QuestionCategory.CREATIVE_EXPRESSION,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: true,
    danceStyles: [DanceStyle.LOCKING, DanceStyle.POPPING],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 6
  },
  {
    content: '我喜欢探索不同文化背景的舞蹈风格',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: false,
    danceStyles: [DanceStyle.WAACKING, DanceStyle.VOGUING, DanceStyle.HOUSE],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 7
  },
  {
    content: '我更喜欢在熟悉的音乐下跳舞，这样更有安全感',
    category: QuestionCategory.MUSIC_SENSITIVITY,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.POPPING],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 8
  },
  {
    content: '我经常会想象如何改进现有的舞蹈动作',
    category: QuestionCategory.CREATIVE_EXPRESSION,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: false,
    danceStyles: [DanceStyle.ANIMATION, DanceStyle.ROBOT],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 9
  },
  {
    content: '在团队编舞时，我更倾向于使用大家都熟悉的动作',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 10
  },
  {
    content: '我喜欢尝试将街舞与其他艺术形式结合',
    category: QuestionCategory.CREATIVE_EXPRESSION,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: false,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.VOGUING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 11
  },
  {
    content: '我认为每种舞蹈风格都应该保持其原有的纯粹性',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.OPENNESS,
    isReverse: true,
    danceStyles: [DanceStyle.LOCKING, DanceStyle.POPPING, DanceStyle.BREAKING],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 12
  },

  // CONSCIENTIOUSNESS 尽责性 (12题)
  {
    content: '我会制定详细的练习计划并严格执行',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION, DanceStyle.ROBOT],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 13
  },
  {
    content: '在学习新动作时，我会反复练习直到完全掌握',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.LOCKING],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 14
  },
  {
    content: '我经常因为练习而忘记时间',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 15
  },
  {
    content: '我更喜欢随性的练习，不喜欢被计划束缚',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 16
  },
  {
    content: '在团队排练中，我总是准时到达并做好准备',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.LOCKING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 17
  },
  {
    content: '我会仔细分析自己的舞蹈视频，找出需要改进的地方',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION, DanceStyle.BREAKING],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 18
  },
  {
    content: '我经常会因为一个动作不够完美而重复练习很多遍',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ROBOT, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 19
  },
  {
    content: '我觉得差不多就行了，不需要追求完美',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 20
  },
  {
    content: '在Battle前，我会充分准备和练习',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.POPPING, DanceStyle.LOCKING],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 21
  },
  {
    content: '我会记录自己的练习进度和改进点',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 22
  },
  {
    content: '我更喜欢即兴发挥，不喜欢过度准备',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 23
  },
  {
    content: '我会设定明确的舞蹈学习目标',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.CONSCIENTIOUSNESS,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.POPPING],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 24
  },

  // EXTRAVERSION 外向性 (13题)
  {
    content: '在Cypher中，我喜欢第一个进圈跳舞',
    category: QuestionCategory.CYPHER_INTERACTION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.BREAKING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.CYPHER,
    orderIndex: 25
  },
  {
    content: '我享受在众人面前表演的感觉',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP, DanceStyle.VOGUING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 26
  },
  {
    content: '我更喜欢独自练习，不喜欢被人观看',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: true,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 27
  },
  {
    content: '在Battle中，我会主动挑战更强的对手',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 28
  },
  {
    content: '我喜欢与其他舞者交流和分享经验',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.LOCKING],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 29
  },
  {
    content: '在团队中，我更愿意做幕后工作',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: true,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 30
  },
  {
    content: '我经常主动组织舞蹈活动或聚会',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 31
  },
  {
    content: '我在大型活动中会感到紧张和不自在',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: true,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 32
  },
  {
    content: '我喜欢成为团队的焦点和中心',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP, DanceStyle.VOGUING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 33
  },
  {
    content: '我更喜欢小规模的舞蹈聚会',
    category: QuestionCategory.CYPHER_INTERACTION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: true,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.WAACKING],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 34
  },
  {
    content: '我会主动邀请新人加入我们的舞蹈圈子',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.LOCKING],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 35
  },
  {
    content: '在Cypher中，我更喜欢观看别人跳舞',
    category: QuestionCategory.CYPHER_INTERACTION,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: true,
    danceStyles: [DanceStyle.ANIMATION, DanceStyle.ROBOT],
    scenarioType: ScenarioType.CYPHER,
    orderIndex: 36
  },
  {
    content: '我享受与观众的互动和反馈',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.EXTRAVERSION,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP, DanceStyle.VOGUING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 37
  },

  // AGREEABLENESS 宜人性 (12题)
  {
    content: '在Cypher中，我会鼓励和支持其他舞者',
    category: QuestionCategory.CYPHER_INTERACTION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.LOCKING],
    scenarioType: ScenarioType.CYPHER,
    orderIndex: 38
  },
  {
    content: '我认为在Battle中使用心理战术是必要的',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: true,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 39
  },
  {
    content: '我喜欢帮助新手学习舞蹈',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.LOCKING],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 40
  },
  {
    content: '在团队编舞中，我更关注整体效果而不是个人表现',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.WAACKING, DanceStyle.VOGUING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 41
  },
  {
    content: '我认为每个人都应该争取更多的表演机会',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: true,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 42
  },
  {
    content: '我会主动分享自己的舞蹈技巧和经验',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.LOCKING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 43
  },
  {
    content: '在发生冲突时，我倾向于寻求和解',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.WAACKING],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 44
  },
  {
    content: '我认为竞争比合作更重要',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: true,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 45
  },
  {
    content: '我会考虑其他团队成员的感受和想法',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.HIPHOP],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 46
  },
  {
    content: '我更愿意让别人先展示，自己后上',
    category: QuestionCategory.CYPHER_INTERACTION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.WAACKING],
    scenarioType: ScenarioType.CYPHER,
    orderIndex: 47
  },
  {
    content: '我认为保护自己的独特技巧很重要',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: true,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 48
  },
  {
    content: '我喜欢创造和谐的团队氛围',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.AGREEABLENESS,
    isReverse: false,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.HIPHOP, DanceStyle.LOCKING],
    scenarioType: ScenarioType.SOCIAL,
    orderIndex: 49
  },

  // NEUROTICISM 神经质 (13题)
  {
    content: '在重要的Battle前，我会感到非常紧张',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: false,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.POPPING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 50
  },
  {
    content: '即使在压力下，我也能保持冷静',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: true,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 51
  },
  {
    content: '当我的动作出错时，我会很长时间都在想这件事',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 52
  },
  {
    content: '我很容易从失败中恢复过来',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.KRUMP],
    scenarioType: ScenarioType.BATTLE,
    orderIndex: 53
  },
  {
    content: '当别人批评我的舞蹈时，我会感到很沮丧',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.LEARNING,
    orderIndex: 54
  },
  {
    content: '我能够很好地处理表演中的突发状况',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.BREAKING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 55
  },
  {
    content: '我经常担心自己的舞蹈水平不够好',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION, DanceStyle.ROBOT],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 56
  },
  {
    content: '我对自己的舞蹈能力很有信心',
    category: QuestionCategory.BATTLE_PERFORMANCE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: true,
    danceStyles: [DanceStyle.BREAKING, DanceStyle.KRUMP, DanceStyle.VOGUING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 57
  },
  {
    content: '当音乐突然变化时，我会感到慌乱',
    category: QuestionCategory.MUSIC_SENSITIVITY,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.ANIMATION],
    scenarioType: ScenarioType.CYPHER,
    orderIndex: 58
  },
  {
    content: '我能够很好地适应不同的音乐风格',
    category: QuestionCategory.MUSIC_SENSITIVITY,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE, DanceStyle.BREAKING],
    scenarioType: ScenarioType.CYPHER,
    orderIndex: 59
  },
  {
    content: '我经常因为练习不够而感到焦虑',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: false,
    danceStyles: [DanceStyle.POPPING, DanceStyle.BREAKING],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 60
  },
  {
    content: '我很少因为舞蹈相关的事情而感到压力',
    category: QuestionCategory.LEARNING_STYLE,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: true,
    danceStyles: [DanceStyle.HIPHOP, DanceStyle.HOUSE],
    scenarioType: ScenarioType.PRACTICE,
    orderIndex: 61
  },
  {
    content: '在团队表演中，我担心自己会拖累整个团队',
    category: QuestionCategory.TEAM_COLLABORATION,
    dimension: PersonalityDimension.NEUROTICISM,
    isReverse: false,
    danceStyles: [DanceStyle.HOUSE, DanceStyle.WAACKING],
    scenarioType: ScenarioType.PERFORMANCE,
    orderIndex: 62
  }
]