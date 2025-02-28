import Image from "next/image";

export default function GalleryGrid() {
  const images = [
    {
      id: 1,
      imgURL:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hollywood Actor 1",
    },
    {
      id: 2,
      imgURL:
        "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hollywood Actor 2",
    },
    {
      id: 3,
      imgURL:
        "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Hollywood Sign",
    },
    {
      id: 4,
      imgURL:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Movie Premiere",
    },
    {
      id: 5,
      imgURL:
        "https://images.unsplash.com/photo-1674834727149-00812f907676?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pexels Stock Photo",
    },
    {
      id: 6,
      imgURL:
        "https://images.unsplash.com/photo-1651840403915-a69f6386b959?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 7,
      imgURL:
        "https://images.unsplash.com/photo-1651840403917-50e629a8f3e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 8,
      imgURL:
        "https://images.unsplash.com/photo-1651840403913-37901945493a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 9,
      imgURL:
        "https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 10,
      imgURL:
        "https://images.unsplash.com/photo-1544021601-3e5723f9d333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 11,
      imgURL:
        "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 12,
      imgURL:
        "https://images.unsplash.com/photo-1614236224416-9a88c2e195e1?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 13,
      imgURL:
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 14,
      imgURL:
        "https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 15,
      imgURL:
        "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 16,
      imgURL:
        "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 17,
      imgURL:
        "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 18,
      imgURL:
        "https://images.unsplash.com/photo-1593493338652-f3eee0e27c38?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 19,
      imgURL:
        "https://images.unsplash.com/photo-1604131800125-36a18659cc50?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 20,
      imgURL:
        "https://images.unsplash.com/photo-1593505042335-f34c535a9dbe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
    {
      id: 21,
      imgURL:
        "https://images.unsplash.com/photo-1674834727206-4bc272bfd8da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pixabay Mountains",
    },
  ];

  return (
    <div className="container mx-auto p-10 lg:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-full h-[300px] rounded-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <img
              src={image.imgURL}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
