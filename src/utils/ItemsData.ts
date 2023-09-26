export type ItemsData = {
    id: string;
    title: string;
    description: string;
    image: any;
  };
  
  export const Data: ItemsData[] = [
    {
      id: '1',
      title: 'Matrix',
      description: 'The Matrix collection depicts a complex science fiction story incorporating many philosophical elements. Written and directed by the Wachowskis and produced by Joel Silver.',
      image: require('../assets/matrix-1.jpg'),
    },
    {
      id: '2',
      title: 'Black Mirror',
      description: 'Over the last ten years, technology has transformed almost every aspect of our lives',
      image: require('../assets/black-mirror.jpg'),
    },
    {
      id: '3',
      title: 'Animatrix',
      description: 'Straight from the creators of the groundbreaking Matrix trilogy, this collection of short animated films from the world. The shorts include Final Flight of the Osiris, The Second Renaissance',
      image: require('../assets/animatrix.jpeg'),
    },
    {
      id: '4',
      title: 'Mr Robot',
      description: 'A contemporary and culturally resonant drama about a young programmer, Elliot, who suffers from a debilitating anti-social disorder and decides that he can only connect to people by hacking them. He wields his skills as a weapon to protect the people that he cares about. Elliot will find himself in the intersection between a cybersecurity firm he works for and the underworld organizations that are recruiting him to bring down corporate America.',
      image: require('../assets/mr-robot.jpg'),
    },
    {
      id: '5',
      title: 'Doctor Strange',
      description: 'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
      image: require('../assets/doctor-strange.jpg'),
    },
    {
      id: '6',
      title: 'Game of Thrones',
      description: 'Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war.',
      image: require('../assets/got.jpg'),
    },
    {
      id: '7',
      title: 'The Last Kingdom',
      description: 'Black Mirror',
      image: require('../assets/tlk.jpg'),
    },
    {
      id: '8',
      title: 'Vikings',
      description: 'The adventures of Ragnar Lothbrok, the greatest hero of his age.',
      image: require('../assets/vikings.jpg'),
    },
    {
      id: '9',
      title: 'The Lord of Rings',
      description: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator',
      image: require('../assets/lotr.jpg'),
    },
  ];
  