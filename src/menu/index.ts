const menu = [
  {
    icon: "gift",
    name: "测试一级菜单0",
    path: 'test00',
    subMenu: [
      {
        icon: "gift",
        name: "测试二级菜单00",
        path: 'test00',
      },
      {
        icon: "gift",
        name: "测试二级菜单01",
        path: 'test00',
      },
    ],
  },
  {
    icon: "gift",
    name: "测试一级菜单1",
    path: 'test00',
    subMenu: [
      {
        icon: "gift",
        name: "测试二级菜单10",
        path: 'test00',
      },
      {
        icon: "gift",
        name: "测试二级菜单11",
        path: 'test11',
        subMenu: [
          {
            icon: "gift",
            name: "测试二级菜单110",
            path: 'test110',
          },
        ],
      },
    ],
  },
  {
    icon: "gift",
    name: "测试一级菜单2",
    path: 'test00',
  },
];

export default menu;