import mongoose from "mongoose";

export const advertises = [
  {
    pictureSRC:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/training-fw21-KarlieKlossXadidas-launch-q4-HP-teaser-carousel-a_tcm337-700039.jpg",
    title: "Big Out Door Energy",
    desc: "Bộ sưu tập cho các hoạt động ngoài trời ,hợp tác thiết kế với Kalie Klos nhằm khơi nguồn hứng khởi",
  },
  {
    pictureSRC:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/Running-FW21-LEGO-DNAColors-Adult-EDUCATE-GLP-TEASERCAROUSEL-F1-D_tcm337-706131.jpg",
    title: "Bo Suu Tap Tokyo",
    desc: "Dành cho những người muốn định nghĩa lại tương lai",
  },
  {
    pictureSRC:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/specialist_sports-ss21-olympics-tokyo_collection-sustain-hp-2-teaser_carousel-o_tcm337-692837.jpg",
    title: "Big Out Door Energy",
    desc: "Trang phục phù hợp với nhiều môn thể thao",
  },
  {
    pictureSRC:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/football-fw21-meteorite-pack-launch-hp-teaser-carousel-p0-d_tcm337-703090.jpg",
    title: "Big Out Door Energy",
    desc: "Bộ sưu tập cho các hoạt động ngoài trời ,hợp tác thiết kế với Kalie Klos",
  },
];

const Advertise = new mongoose.Schema({
  pictureSRC: String,
  title: String,
  desc: String,
});
export default mongoose.models.Advertise ||
  mongoose.model("Advertise", Advertise);
