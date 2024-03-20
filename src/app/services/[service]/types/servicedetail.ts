import { Iservice } from "./servicedetail.interface";

export const serviceDetail: Iservice[] = [
  {
    id: "machinelearning",
    name: "Machine Learning Solution",
    image: "/services/product/machinelearning.avif",
    desc: "Harness the power of data with our machine learning solutions. From predictive analytics to natural language processing, we leverage advanced algorithms to uncover valuable insights and drive informed decision-making for your business.",
    solution: [
      {
        name: "Object Detection",
        image: "/services/detail/machinelearning/objdetect.avif",
        price: "$100",
        jobdesc:
          "Develop and implement machine learning models for object detection tasks, such as identifying and tracking objects in images or videos.",
      },
      {
        name: "Natural Language Processing",
        image: "/services/detail/machinelearning/nlp.avif",
        price: "$750",
        jobdesc:
          "Create and deploy natural language processing models to analyze and understand text data, enabling tasks such as sentiment analysis, text classification, and language translation.",
      },
      {
        name: "Fully Functional Generative AI",
        image: "/services/detail/machinelearning/genai.avif",
        price: "$1500",
        jobdesc:
          "Build and deploy generative artificial intelligence models capable of generating realistic and original content, such as images, text, or music.",
      },
    ],
  },
  {
    id: "webdev",
    name: "Web Development",
    image: "/services/product/webdev.avif",
    desc: "Elevate your online presence with our expert web development services. Our skilled team of developers crafts stunning and responsive websites that captivate audiences and deliver seamless user experiences. From custom designs to robust back-end systems, we bring your vision to life on the web.",
    solution: [
      {
        name: "Simple Blog Site",
        image: "/services/detail/webdev/blogsite.avif",
        price: "$1500",
        jobdesc:
          "Design and develop a simple and user-friendly blog website, allowing users to create, read, update, and delete blog posts.",
      },
      {
        name: "Dashboard",
        image: "/services/detail/webdev/dashboard.avif",
        price: "$3000",
        jobdesc:
          "Create interactive and informative dashboards that visualize data and key performance indicators, providing insights for decision-making.",
      },
      {
        name: "E-commerce",
        image: "/services/detail/webdev/ecommerce.avif",
        price: "$5000",
        jobdesc:
          "Build a fully functional e-commerce platform with features such as product listings, shopping carts, payment processing, and order management.",
      },
    ],
  },
  {
    id: "iot",
    name: "IoT Architecture",
    image: "/services/product/iot.avif",
    desc: "Transform your business with our IoT architecture solutions. We design and implement connected systems that optimize efficiency, enhance connectivity, and revolutionize industries. From smart devices to IoT-enabled infrastructure, we build innovative solutions that drive real-world impact and empower your business for the future.",
    solution: [
      {
        name: "MQTT-protocol Devices",
        image: "/services/detail/iot/mqtt.avif",
        price: "$100",
        jobdesc:
          "Develop and deploy IoT devices using the MQTT protocol, enabling lightweight and efficient communication between devices and IoT platforms.",
      },
      {
        name: "Zigbee-protocol Devices",
        image: "/services/detail/iot/zigbee.avif",
        price: "$2500",
        jobdesc:
          "Design and implement IoT devices using the Zigbee protocol, enabling low-power and secure wireless communication for smart home and industrial applications.",
      },
      {
        name: "LoRaWAN-protocol Devices",
        image: "/services/detail/iot/lorawan.avif",
        price: "$10000",
        jobdesc:
          "Create IoT devices utilizing the LoRaWAN protocol, enabling long-range and low-power communication for applications such as smart agriculture, asset tracking, and environmental monitoring.",
      },
    ],
  },
  {
    id: "embedded",
    name: "Embedded Systems",
    image: "/services/product/embedded.avif",
    desc: "Power your devices with our reliable and efficient embedded systems. Our team specializes in designing and implementing embedded solutions for a wide range of applications, ensuring reliability, performance, and seamless integration. Whether it's consumer electronics or industrial automation, we deliver tailored solutions to meet your specific needs.",
    solution: [
      {
        name: "Arduino Projects",
        image: "/services/detail/embedded/arduino.avif",
        price: "$100",
        jobdesc:
          "Develop embedded systems projects using Arduino microcontrollers, enabling rapid prototyping and development for various applications.",
      },
      {
        name: "ESP board Projects",
        image: "/services/detail/embedded/esp.avif",
        price: "$250",
        jobdesc:
          "Design and implement projects utilizing ESP boards (e.g., ESP32, ESP8266) for IoT and connectivity applications, including sensor data acquisition and wireless communication.",
      },
      {
        name: "Raspberry Pi Projects",
        image: "/services/detail/embedded/raspberry.avif",
        price: "$500",
        jobdesc:
          "Create embedded systems projects using Raspberry Pi single-board computers, enabling versatile and powerful computing capabilities for IoT, automation, and multimedia applications.",
      },
    ],
  },
];
