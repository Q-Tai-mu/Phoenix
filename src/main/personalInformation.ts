import generateRandomNumber from './randomUtil'

interface upd {
  StackObjectsCount: number
  SpawnedInSession: boolean
}
interface location {
  x: number
  y: number
  r: string
  isSearched: boolean
}
interface itemX {
  _id?: string
  _tpl?: string
  slotId?: string
  location?: location
  parentId?: string
  upd?: upd
}

/**
 * 给予pmc全部良好的血量和饮食饮水
 * @param targetObj contact
 * @returns  contact
 */
export function callRestoreHealthPmc(targetObj: any): void {
  targetObj.characters.pmc.Health.BodyParts.Head.Health.Current = 35
  targetObj.characters.pmc.Health.BodyParts.Chest.Health.Current = 85
  targetObj.characters.pmc.Health.BodyParts.Stomach.Health.Current = 70
  targetObj.characters.pmc.Health.BodyParts.RightArm.Health.Current = 60
  targetObj.characters.pmc.Health.BodyParts.LeftArm.Health.Current = 60
  targetObj.characters.pmc.Health.BodyParts.RightLeg.Health.Current = 65
  targetObj.characters.pmc.Health.BodyParts.LeftLeg.Health.Current = 65
  targetObj.characters.pmc.Health.Hydration.Current = 100
  targetObj.characters.pmc.Health.Energy.Current = 100
}
/**
 * 给予scav全部良好的血量和饮食饮水
 * @param targetObj contact
 * @returns  contact
 */
export function callRestoreHealthScav(targetObj: any): void {
  targetObj.characters.scav.Health.BodyParts.Head.Health.Current = 35
  targetObj.characters.scav.Health.BodyParts.Chest.Health.Current = 85
  targetObj.characters.scav.Health.BodyParts.Stomach.Health.Current = 70
  targetObj.characters.scav.Health.BodyParts.RightArm.Health.Current = 60
  targetObj.characters.scav.Health.BodyParts.LeftArm.Health.Current = 60
  targetObj.characters.scav.Health.BodyParts.RightLeg.Health.Current = 65
  targetObj.characters.scav.Health.BodyParts.LeftLeg.Health.Current = 65
  targetObj.characters.scav.Health.Hydration.Current = 100
  targetObj.characters.scav.Health.Energy.Current = 100
}

/**
 * 给予玩家满级经验
 * @param targetObj contact
 */
export function MaxLevel(targetObj: any): void {
  targetObj.characters.pmc.Info.Experience = 68206065
  targetObj.characters.pmc.Info.Level = 78
}

/**
 * 移除所有效果
 * @param targetObj contact
 */
export function removeNegative(targetObj: any): void {
  // eslint-disable-next-line prefer-const
  for (let part in targetObj.characters.pmc.Health.BodyParts) {
    if (targetObj.characters.pmc.Health.BodyParts[part]['Effects'] != null) {
      delete targetObj.characters.pmc.Health.BodyParts[part].Effects
    }
  }
}

/**
 * 添加物品至仓库
 * @param targetObj contact
 * @param item 物品
 */
function addItemX(targetObj: any, item: itemX): void {
  targetObj.characters.pmc.Inventory.items.push(item)
}

/**
 * 添加m2
 * @param targetObj contact
 */
export function addItemM2(targetObj: any): void {
  const m2target: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '5bffdd7e0db834001b734a1a',
    slotId: 'hideout',
    location: {
      x: 14,
      y: 0,
      r: 'Horizontal',
      isSearched: true
    },
    parentId: '5fe49444ae6628187a2e78b8',
    upd: {
      StackObjectsCount: 1,
      SpawnedInSession: false
    }
  }
  addItemX(targetObj, m2target)
}

/**
 * 添加m3a1
 * @param targetObj contact
 */
export function addItemM3A1(targetObj: any): void {
  const id = generateRandomNumber(24);
  const hideout1: itemX = {
    _id: id,
    _tpl: '6275303a9f372d6ea97f9ec7',
    slotId: 'hideout',
    location: {
      x: 0,
      y: 1,
      r: 'Horizontal',
      isSearched: true
    },
    parentId: '5fe49444ae6628187a2e78b8',
    upd: {
      StackObjectsCount: 1,
      SpawnedInSession: false
    }
  }
  addItemX(targetObj, hideout1)
  const mod_pistol_grip1: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '571659bb2459771fb2755a12',
    slotId: 'mod_pistol_grip',
    parentId: id
  }
  addItemX(targetObj, mod_pistol_grip1)
  const mod_stock1: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '55d4ae6c4bdc2d8b2f8b456e',
    slotId: 'mod_stock',
    parentId: id
  }
  addItemX(targetObj, mod_stock1)
  const mod_magazine1: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '627bce33f21bc425b06ab967',
    slotId: 'mod_magazine',
    parentId: id
  }
  addItemX(targetObj, mod_magazine1)
  const mod_scope1: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '6284bd5f95250a29bc628a30',
    slotId: 'mod_scope',
    parentId: id
  }
  addItemX(targetObj, mod_scope1)
}

/**
 * 添加（200卢布，50美元，50欧元）单位w
 * @param targetObj contact
 */
export function addMoney(targetObj: any): void {
  const items: itemX[] = [
    {
      _id: generateRandomNumber(24),
      _tpl: '5449016a4bdc2d6f028b456f',
      slotId: 'hideout',
      location: {
        x: 0,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 500000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '5696686a4bdc2da3298b456a',
      slotId: 'hideout',
      location: {
        x: 1,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '5696686a4bdc2da3298b456a',
      slotId: 'hideout',
      location: {
        x: 2,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '5696686a4bdc2da3298b456a',
      slotId: 'hideout',
      location: {
        x: 3,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '5696686a4bdc2da3298b456a',
      slotId: 'hideout',
      location: {
        x: 4,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '5696686a4bdc2da3298b456a',
      slotId: 'hideout',
      location: {
        x: 5,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },

    {
      _id: generateRandomNumber(24),
      _tpl: '569668774bdc2da2298b4568',
      slotId: 'hideout',
      location: {
        x: 6,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '569668774bdc2da2298b4568',
      slotId: 'hideout',
      location: {
        x: 7,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '569668774bdc2da2298b4568',
      slotId: 'hideout',
      location: {
        x: 8,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    },
    {
      _id: generateRandomNumber(24),
      _tpl: '569668774bdc2da2298b4568',
      slotId: 'hideout',
      location: {
        x: 9,
        y: 0,
        r: 'Horizontal',
        isSearched: true
      },
      parentId: '5fe49444ae6628187a2e78b8',
      upd: {
        StackObjectsCount: 50000,
        SpawnedInSession: false
      }
    }
  ]
  for (let i = 0; i < items.length; i++) {
    addItemX(targetObj, items[i])
  }
}

/**
 * 添加6b43俄重
 * @param targetObj contact
 */
export function add6B43(targetObj: any): void {
  const item: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '545cdb794bdc2d3a198b456a',
    slotId: 'hideout',
    location: {
      x: 30,
      y: 0,
      r: 'Horizontal',
      isSearched: true
    },
    parentId: '5fe49444ae6628187a2e78b8',
    upd: {
      StackObjectsCount: 1,
      SpawnedInSession: false
    }
  }
  addItemX(targetObj, item)
}

/**
 * 添加警用多用途单挂
 * @param targetObj contact
 */
export function addVelocity(targetObj: any): void {
  const item: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '5df8a42886f77412640e2e75',
    slotId: 'hideout',
    location: {
      x: 38,
      y: 0,
      r: 'Horizontal',
      isSearched: true
    },
    parentId: '5fe49444ae6628187a2e78b8',
    upd: {
      StackObjectsCount: 1,
      SpawnedInSession: false
    }
  }
  addItemX(targetObj, item)
}

/**
 * 添加6b47头盔
 * @param targetObj contact
 */
export function add6b47(targetObj: any): void {
  const item: itemX = {
    _id: generateRandomNumber(24),
    _tpl: '5aa7cfc0e5b5b00015693143',
    slotId: 'hideout',
    location: {
      x: 42,
      y: 0,
      r: 'Horizontal',
      isSearched: true
    },
    parentId: '5fe49444ae6628187a2e78b8',
    upd: {
      StackObjectsCount: 1,
      SpawnedInSession: false
    }
  }
  addItemX(targetObj, item)
}
