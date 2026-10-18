// Royalty-free photos from Unsplash (Unsplash License).
const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const img = {
  fiber: u("1544197150-b99a580bb7a8"),
  server: u("1558494949-ef010cbdcc31"),
  engineer: u("1581092160562-40aa08e78837"),
  construction: u("1504307651254-35680f356dfd"),
  building: u("1486406146926-c627a92ad1ab"),
  team: u("1522071820081-009f0129c71c"),
  network: u("1451187580459-43490279c0fa"),
  office: u("1497366216548-37526070297c"),
  electric: u("1621905251189-08b45d6a269e"),
  meeting: u("1600880292203-757bb62b4baf"),
};
export const ogImage = (id: keyof typeof img) => img[id].replace("w=1600", "w=1200&h=630");
