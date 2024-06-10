// import { Injectable } from '@angular/core';

// interface MediaContent {
//   images: string[];
//   videos: string[];
//   news: { title: string; content: string }[];
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class MediaService {
//   private apiUrl = 'https://localhost:5130/api/media';


//   private mediaData: { [key: string]: MediaContent } = {
//     media1: {
//       images: ['assets/image1.jpg', 'assets/image2.jpg', 'assets/image.jpg'],
//       videos: ['assets/video1.mp4'],
//       news: [
//         {
//           title: "Iran’s former leader seeks to regain office",
//           content: `TEHRAN — Iran’s hard-line former President Mahmoud Ahmadinejad registered Sunday as a possible candidate for the presidential election, seeking to regain the country’s top political position after a helicopter crash killed the nation’s president.

//           The former leader’s registration puts pressure on Supreme Leader Ayatollah Ali Khamenei. In office, Mr. Ahmadinejad openly challenged the 85-year-old cleric, and his attempt to run in 2021 was barred by authorities.

//           The Holocaust-questioning politician registered at a time of heightened tensions between Iran and the West over Tehran’s advancing nuclear program, its arming of Russia in its war against Ukraine, and its crackdowns on dissent.

//           Meanwhile, Iran’s support of militia proxy forces throughout the Mideast have been in increased focus as Yemen’s Houthi rebels attack ships in the Red Sea over the Israel-Hamas war in the Gaza Strip.

//           Mr. Ahmadinejad is the most prominent candidate to register so far. Speaking after his registration, he vowed to seek “constructive engagement” with the world and improved economic relations with all nations.`
//         }
//       ]
//     },
//     media2: {
//       images: ['assets/image3.jpg', 'assets/image4.jpg', 'assets/agriculture.jpg'],
//       videos: ['assets/video3.mp4'],
//       news: [
//         {
//           title: "Agriculture",
//           content: `Agriculture is the practice of cultivating plants and livestock for food, fiber, medicinal plants, and other products used to sustain and enhance human life. It is the backbone of many economies and a fundamental source of food security for billions of people around the world.

//           Key points about agriculture include:

//           Types of Agriculture: There are several types of agriculture, including subsistence farming, commercial farming, organic farming, and agribusiness. Each type has its own methods and goals.
//           Importance of Agriculture: Agriculture is crucial for providing food security, reducing poverty, and promoting economic growth. It also plays a key role in sustainable development and environmental conservation.
//           Challenges in Agriculture: Agriculture faces various challenges, including climate change, water scarcity, soil degradation, pests and diseases, and the need for sustainable farming practices.`
//         }
//       ]
//     },
//     media3: {
//       images: ['assets/cricket.jpg', 'assets/cricket1.jpg'],
//       videos: ['assets/video2.mp4'],
//       news: [
//         {
//           title: "Cricket",
//           content: `Team India, officially known as the Indian National Cricket Team, represents India in international cricket. Here are some key points about Team India:

//           History and Achievements
//           Formation and Early Years:

//           The Indian cricket team played its first Test match on June 25, 1932, against England at Lord's.
//           India won its first Test match in 1952 against England in Madras (now Chennai).
//           World Cup Success:

//           India won its first ICC Cricket World Cup in 1983, under the captaincy of Kapil Dev.
//           The team clinched its second World Cup in 2011, under the leadership of Mahendra Singh Dhoni.
//           T20 World Cup:

//           India won the inaugural ICC T20 World Cup in 2007, also under MS Dhoni's captaincy.
//           Champions Trophy:

//           India has won the ICC Champions Trophy twice, in 2002 (shared with Sri Lanka) and in 2013.
//           Test Cricket:

//           India has held the top spot in the ICC Test rankings multiple times and has produced legendary cricketers like Sachin Tendulkar, Sunil Gavaskar, and Rahul Dravid.
//           The team won the inaugural ICC World Test Championship in 2021-2023 cycle.
//           Key Players
//           Past Legends:

//           Sachin Tendulkar: Widely regarded as one of the greatest batsmen in the history of cricket.
//           Kapil Dev: Renowned for his all-round abilities and for leading India to its first World Cup victory.
//           Sunil Gavaskar: Known for his record-breaking Test career.
//           Current Stars:

//           Virat Kohli: One of the best modern-day batsmen and former captain.
//           Rohit Sharma: Known for his explosive batting and current captain in limited-overs cricket.
//           Jasprit Bumrah: A premier fast bowler known for his unique action and effectiveness.`
//         }
//       ]
//     }
//   };

//   getMediaData(key: string): MediaContent | undefined {
//     return this.mediaData[key];
//   }
// }

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaDialogComponent } from './media-dialog/media-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private dialog: MatDialog) {}

  openMediaDialog(data: any) {
    this.dialog.open(MediaDialogComponent, {
      width: '600px',
      data: data
    });
  }
}

