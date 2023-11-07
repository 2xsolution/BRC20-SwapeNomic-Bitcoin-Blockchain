import twitter_icon from "../public/icons/twitter_icon.svg";
import telegram_icon from "../public/icons/telegram_icon.svg";
import facebook_icon from "../public/icons/facebook_icon.svg";
import reddit_icon from "../public/icons/reddit_icon.svg";
import youtube_icon from "../public/icons/youtube_icon.svg";

export const LeftSideHeaderIcons: IconData[] = [
  {
    icon: twitter_icon,
    url: "https://www.twitter.com",
  },
  {
    icon: telegram_icon,
    url: "https://www.telegram.com",
  },
  {
    icon: facebook_icon,
    url: "https://www.facebook.com",
  },
  {
    icon: reddit_icon,
    url: "https://www.redit.com",
  },
  {
    icon: youtube_icon,
    url: "https://www.youtube.com",
  },
];
export type LeftSideHeaderIconItem = {
  icon: any;
  url: string;
};

type IconData = {
  icon: React.ComponentType;
  url: string;
};
