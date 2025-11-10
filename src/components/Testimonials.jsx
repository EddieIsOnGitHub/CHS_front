import HeaderText from "../components/HeaderText";
import InfiniteScroll from "../components/InfiniteScroll";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CHS Inc. exceeded our expectations. The team was professional, efficient, and delivered on time. Highly recommended!",
      name: "Jane D., Calgary",
    },
    {
      quote: "We’ve used CHS Inc. for multiple commercial projects. Their attention to detail and safety is unmatched.",
      name: "Mark R., Edmonton",
    },
    {
      quote: "From start to finish, CHS Inc. was organized and transparent. The quality of work speaks for itself.",
      name: "Sarah L., Vancouver",
    },
    {
      quote: "Professional, knowledgeable, and reliable. CHS Inc. is our go-to for all future projects.",
      name: "David M., Toronto",
    },
    {
      quote: "The CHS team truly cares about their clients. They went above and beyond to ensure everything was perfect.",
      name: "Emily W., Winnipeg",
    },
    {
      quote: "I was impressed with their efficiency and ability to adapt to last-minute changes without any issues.",
      name: "Alex P., Ottawa",
    },
    {
      quote: "Their professionalism and attention to detail made the entire process stress-free. We couldn’t be happier with the outcome.",
      name: "Samantha R., Toronto",
    },
    {
      quote: "The team went above and beyond to ensure everything was completed on time. Truly reliable and trustworthy service.",
      name: "Daniel M., Vancouver",
    },
    {
      quote: "They were responsive, knowledgeable, and always ready to provide solutions. Working with them was a pleasure.",
      name: "Linda K., Edmonton",
    },
    {
      quote: "From start to finish, the communication was excellent, and the quality of their work exceeded expectations.",
      name: "Chris H., Montreal",
    },
    {
      quote: "I appreciated their ability to quickly understand our needs and deliver results that aligned perfectly with our vision.",
      name: "Priya S., Calgary",
    },
    {
      quote: "Every interaction with their staff was positive and professional. I’d recommend them without hesitation.",
      name: "Michael T., Winnipeg",
    },
    {
      quote: "They consistently deliver high-quality results while keeping everything on schedule. Very dependable team.",
      name: "Emily B., Halifax",
    },
    {
      quote: "Their innovative approach set them apart and brought real value to our project. Fantastic experience overall.",
      name: "Jared W., Ottawa",
    },
  ];

  // Convert testimonials into items for InfiniteScroll
  const items = testimonials.map((t) => ({
    content: (
      <div className="text-center px-4">
        <HeaderText as="h2" className="text-gray-700 italic text-sm md:text-base leading-snug">
          “{t.quote}”
        </HeaderText>
        <HeaderText as="h3" className="mt-2 font-semibold text-[#1E4466] text-xs md:text-sm">
          – {t.name}
        </HeaderText>

      </div>
    ),
  }));

  return (
    <section id="testimonials" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <HeaderText as="h2" className="text-2xl md:text-3xl font-bold text-[#1E4466] mb-6">
          What Our Clients Say
        </HeaderText>


        <div style={{ height: "380px", position: "relative" }}>
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.3}
            autoplayDirection="down"
            pauseOnHover={true}
            itemMinHeight={120}
            negativeMargin="-2em"
          />
        </div>
      </div>
    </section>
  );
}
