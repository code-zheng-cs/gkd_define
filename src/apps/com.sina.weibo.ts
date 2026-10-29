import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '新浪微博',
  groups: [
    {
      key: 0,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击[不感兴趣/不想看到此类内容]',
      fastQuery: true,
      activityIds: [
        '.feed.DetailWeiboActivity',
        '.feed.detailrefactor.DetailPageActivity',
        '.feed.SubCommentActiity',
        '.feed.halfcontainer.HalfContainerPageActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[vid="ll_close" || vid="closeButton"] > [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13852321',
            'https://i.gkd.li/i/19526000',
            'https://i.gkd.li/i/21828244',
            'https://i.gkd.li/i/24291704',
            'https://i.gkd.li/i/19538265',
          ],
        },
        {
          preKeys: [0],
          key: 90,
          matchRoot: true,
          anyMatches: [
            '[text$="不感兴趣"][clickable=true]',
            '@LinearLayout[clickable=true] >2 [text="不感兴趣" || text="不想看到此类内容"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13852322',
            'https://i.gkd.li/i/13958782',
            'https://i.gkd.li/i/16785777',
            'https://i.gkd.li/i/14730274',
            'https://i.gkd.li/i/19551451',
            'https://i.gkd.li/i/20710958',
            'https://i.gkd.li/i/21828246',
          ],
        },
      ],
    },
  ],
});
