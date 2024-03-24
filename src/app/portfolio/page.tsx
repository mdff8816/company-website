import ImageGallery from "@/components/ImageGallery";

const images = [
  "/asset-1.png",
  "/asset-2.png",
  "/asset-3.png",
  "/asset-4.png",
  "/asset-5.png",
  "/asset-6.png",
  "/asset-7.png",
  "/asset-8.png",
  "/asset-9.png",
];

const Portfolio = () => {
  return (
    <div className="flex justify-center px-10 py-10 mb-20 border-2 border-gray-200 bg-green-50">
      <div className="mb-10">
        <div className="container mx-auto p-4">
          <ImageGallery images={images} />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
