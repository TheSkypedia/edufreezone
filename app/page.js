"use client";
import Image from "next/image";
import Link from "next/link";
import Card from "./components/Card";
import Hero from "./components/Hero";

const cardsData = [
  {
    title: "Amazon Prime Student",
    content:
      "Amazon is a global online marketplace that offers a wide range of products and services. Students can enjoy a free trial of Amazon Prime Student for six months, gaining access to fast and free shipping, streaming services, and exclusive discounts. Available worldwide.",
    buttonText: "Button 1 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/amazon-logo.webp",
    category: "Category A",
    url: "https://www.amazon.in/gp/prime/pipeline/youngadult/ref=s9_acss_bw_cg_PYAPC_md1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-1&pf_rd_r=QMQEEFMA01QBWSBQCHWC&pf_rd_t=101&pf_rd_p=d7529bad-a3ed-4b5e-98bc-bfb39aad8121&pf_rd_i=15307611031&tag=saipreetham07-21&sid=KfK3KK",
    badge: "Free",
  },
  {
    title: "Github Student Developer Pack",
    content:
      "GitHub: GitHub is a web-based platform for version control and collaboration that allows developers to work together on projects. GitHub’s Student Developer Pack is a collection of tools and services available to current students.",
    buttonText: "Button 2 Text",
    category: "Category B",
    url: "https://education.github.com/pack",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/github-logo.webp",
    badge: "Free",
  },
  {
    title: "JetBrains",
    content:
      "JetBrains provides professional developer software and integrated development environments. Students can access these tools for free for 12 months, enhancing their productivity and code quality. Available worldwide.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/jetbrains-logo.webp",
    category: "Category B",
    url: "https://www.jetbrains.com/community/education/#students",
  },
  {
    title: "HP",
    content:
      "HP offers student store discounts, enabling current students to access special deals on technology products. Available worldwide.",
    buttonText: "Button 2 Text",
    image: "https://theskypedia.com/wp-content/uploads/2023/06/hp-logo.webp",
    category: "Category B",
    url: "https://www.hp.com/in-en/shop/students/",
  },
  {
    title: "Autodesk",
    content:
      "Autodesk offers free design and modeling software for 36 months, empowering students worldwide to bring their creative ideas to life.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/autodesk-logo.webp",
    category: "Category B",
    url: "https://www.autodesk.com/education/free-software/",
  },
  {
    title: "Amazon Web Services",
    content:
      "AWS Educate Program provides free access to Amazon Web Services for 12 months, allowing students worldwide to gain hands-on experience with cloud computing technologies. (NEW DEAL!)",
    buttonText: "Button 2 Text",
    image: "https://theskypedia.com/wp-content/uploads/2023/06/aws-logo.webp",
    category: "Category B",
    url: "https://aws.amazon.com/education/awseducate/",
  },
  {
    title: "Razer",
    content:
      "Razer’s education program offers a 15% discount on their products for current students in the EU and USA, providing high-quality gaming hardware and accessories. Free for current students.",
    buttonText: "Button 2 Text",
    image: "https://theskypedia.com/wp-content/uploads/2023/06/razer-logo.webp",
    category: "Category B",
    url: "https://www.razer.com/education",
  },
  {
    title: "Microsoft Office",
    content:
      "Microsoft Office 365 Software is available for free to current students worldwide, providing essential productivity tools for academic and personal use.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/office-logo.webp",
    category: "Category B",
    url: "https://www.microsoft.com/en-gb/education/products/office",
  },
  {
    title: "Basecamp",
    content:
      "Basecamp offers free project management software to current students worldwide, helping them collaborate and organize their projects effectively.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/basecamp-logo.webp",
    category: "Category B",
    url: "https://basecamp.com/discounts",
  },
  {
    title: "Lucidchart",
    content:
      "Lucidchart provides free flowchart software to current students worldwide, aiding them in visualizing and communicating ideas and processes.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/lucidchart-logo.webp",
    category: "Category B",
    url: "https://www.lucidchart.com/pages/usecase/education",
  },

  {
    title: "Microsoft Azure",
    content:
      "Microsoft Azure offers free cloud computing credits for current students worldwide, allowing them to explore and develop cloud-based applications. (NEW DEAL!)",
    buttonText: "Button 2 Text",
    image: "https://theskypedia.com/wp-content/uploads/2023/06/azure-logo.webp",
    category: "Category B",
    url: "https://azure.microsoft.com/free/students",
  },
  {
    title: "Apple",
    content:
      "Apple’s Education Pricing Program provides special discounts on Apple products for current students worldwide, making technology more accessible for educational purposes.    ",
    buttonText: "Button 2 Text",
    image: "https://theskypedia.com/wp-content/uploads/2023/06/apple-logo.webp",
    category: "Category B",
    url: "https://www.apple.com/in-edu/store",
  },
  {
    title: "Lucidchart",
    content:
      "Lucidchart provides free flowchart software to current students worldwide, aiding them in visualizing and communicating ideas and processes.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/lucidchart-logo.webp",
    category: "Category B",
    url: "https://www.lucidchart.com/pages/usecase/education",
  },
  {
    title: "Lucidchart",
    content:
      "Lucidchart provides free flowchart software to current students worldwide, aiding them in visualizing and communicating ideas and processes.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/lucidchart-logo.webp",
    category: "Category B",
    url: "https://www.lucidchart.com/pages/usecase/education",
  },
  {
    title: "Lucidchart",
    content:
      "Lucidchart provides free flowchart software to current students worldwide, aiding them in visualizing and communicating ideas and processes.",
    buttonText: "Button 2 Text",
    image:
      "https://theskypedia.com/wp-content/uploads/2023/06/lucidchart-logo.webp",
    category: "Category B",
    url: "https://www.lucidchart.com/pages/usecase/education",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex-col flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 ">
          {cardsData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </div>
      </div>
    </main>
  );
}
