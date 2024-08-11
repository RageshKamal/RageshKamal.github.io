import React from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  Flex,
  Image,
  Link,
  Text,
  UnorderedList,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import AdvanceAutoParts from "../images/p1.jpeg";
import skinstoreimg from "../images/Skinstore.png";
import meanbuy from "../images/meanbuy.png";
import licious from "../images/p3.jpeg";
import image from "../images/p2.jpeg";
import { SiRedux, SiChakraui, SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";

const projects = [
  {
    name: "VNet Peering",
    imageSrc: AdvanceAutoParts,
    websiteUrl: "https://shop.advanceautoparts.com/",
    description:
      `In this project i have created 2 Vnets and a VM in each Vnet.
Peered 2 Vnets using Vnet Peering option.
Allowed ICMP protocol in each VM for communicate with each other.
Using Ping command to check the connection`,
    bullets: [
      // "Group of Five members, build the application in 5 days, where I have developed the Cart page,Checkout page of the website",
      // "Built functionality till checkhout page such as adding and reomve item from cart increase and decrease quantity of the product which reflects to total price",
    ],
    techStack: [
      // { name: "React", icon: FaReact },
      // { name: "React Redux", icon: SiRedux },
      // { name: "NodeJs", icon: FaNodeJs },
      // { name: "ExpressJs", icon: FaNodeJs },
      // { name: "MongoDb", icon: SiMongodb },
      // { name: "Chakra UI", icon: SiChakraui },
    ],

    githubUrl: "https://drive.google.com/file/d/1MasSPzlUw7X8_4fRcKMDiEnEOuVqunc0/view?usp=drive_link",
    demoUrl: "https://advanceautoparts.vercel.app",
  },
  {
    name: "Distributing traffic to VM behind the Load Balancer",
    imageSrc: image,
    websiteUrl: "https://www.lifestylestores.com/in/en/",
    description:
      `In this Project i have created a load balancer to distribute the traffic to backend pool which have 2 VM's with availability set.
For that i used an app code from GitHub.
Used bash commands to create VM in cloud shell.`,
    bullets: [
      // "Group of Five members, build the application in 4 days, where I was leading the team, have developed the Products page,Single product page and the All functionality till checkhout page of the website.",
      // "Developed both frontend and backend setup, and manage workload of each member to built this fully resposive website.",
    ],

    techStack: [
      { name: "HTML", icon: AiFillHtml5 },
      { name: "JS", icon: FaNodeJs },
      { name: "CSS", icon: FaCss3Alt },
    ],
    githubUrl: "https://drive.google.com/file/d/1TCKLVOLXrnB_UO6JS7lKboR_orEmAkCK/view?usp=drive_link",
    demoUrl: "https://example.com/lifestyle-stores-demo",
  },
  {
    name: "Mount Azure File share in Multiple endpoints",
    imageSrc: licious,
    websiteUrl: "https://www.licious.in/",
    description:
      `In this project i have created a VM and a storage account.
Created a Azure File Share in that Storage account.
Created a VM so that we can mount the file share using SMB protocal.
Using the script mounted the file share to the VM.
Upload some files from local to Azure file share to check its replication in the VM.`,
    bullets: [
      // "Group of Five members, build the application in 4 days, where I have developed the Products page,Single product page,Cart page,Login & SignUp page and the All functionality till checkhout page of the website.",
      // "Built functionality till checkhout page such as adding and reomve item from cart increase and decrease quantity of the product which reflects to total price and Login and Signup",
    ],
    techStack: [
      { name: "React", icon: FaReact },
      { name: "React Redux", icon: SiRedux },
      { name: "Chakra UI", icon: SiChakraui },
    ],
    githubUrl: "https://drive.google.com/file/d/1G3DWgtUO-jx2KeKgDBTQPoP3LomscVB6/view?usp=drive_link",
    demoUrl: "https://clone-licious-com.vercel.app/",
  },
  // {
  //   name: "SkinStore",
  //   imageSrc: skinstoreimg,
  //   websiteUrl: "https://www.skinstore.com/",
  //   description:
  //     "SkinStore is an authorized retailer to 100s of premium beauty brands across skin, makeup and hair including SkinCeuticals, Dermalogica etc website. Your one stop destination for beauty and self-care.",
  //   bullets: [
  //     "It is an Individual Project that Built in 5 days,where I worked on the almost each section such as reponsive as well as working it like original website.",
  //   ],
  //   techStack: [
  //     // { name: "React", icon: FaReact },
  //     // { name: "Context API", icon: FaReact },
  //     // { name: "Chakra UI", icon: SiChakraui },
  //   ],
  //   githubUrl: "https://github.com/thedpmane/clone-skinstore",
  //   demoUrl: "https://clone-skinstore.vercel.app/",
  // },
  // {
  //   name: "MeanBuy",
  //   imageSrc: meanbuy,
  //   websiteUrl: "https://www.meanbuy.com/",
  //   description:
  //     "MeanBuy is Online Shopping Is Made Easier with Various Categories and Filters. Best Online Shopping for International Branded Products.",
  //   bullets: [
  //     "It is an Individual Project that Built in 5 days,where I worked on the almost each section and functionality like original website such as adding product to cart.",
  //   ],
  //   techStack: [
  //     { name: "HTML", icon: AiFillHtml5 },
  //     { name: "JS", icon: FaNodeJs },
  //     { name: "CSS", icon: FaCss3Alt },
  //   ],
  //   githubUrl: "https://github.com/your-username/meanbuy-clone",
  //   demoUrl: "https://your-username.github.io/meanbuy-clone/",
  // },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      ml={{ base: 0, md: 60 }}
      p={{ base: "80px 20px", md: 8 }}
    >
      <Heading fontWeight="bold" textAlign="center">
        Projects
      </Heading>
      <Divider
        borderColor="blue.500"
        w="180px"
        borderWidth="2.5px"
        m="20px auto"
      />
      {/* ldfljflkjflldfjljflkfdlflsflafjlkfjldfjlfkljfjlsfjlasjflafkj */}
      <Box>
        {projects.map((project) => (
          <Box
            borderBottom={"1px solid #3182ce"}
            p={"10px"}
            pb="70px"
            mb="20px"
            className="eachProjectDiv MailChimp"
            key={project.name}
          >
            <Heading
              className="ProjectName"
              size={"lg"}
              textAlign={"center"}
              p={5}
            >
              {project.name}
            </Heading>
            <Flex
              className="ProjectContainer"
              gap="3%"
              direction={["column", "column", "column", "column", "row"]}
            >
              <Box
                className="ProjectImage"
                w={["100%", "100%", "100%", "100%", "60%"]}
              >
                <Image
                  objectFit={"contain"}
                  w="100%"
                  src={project.imageSrc}
                  alt="notfound"
                />
              </Box>
              <Box
                className="projectDescription"
                w={["100%", "100%", "100%", "100%", "37%"]}
                fontSize="18px"
                letterSpacing={"normal"}
                textAlign={"left"}
                lineHeight={"25px"}
              >
                <Text>
                  {/* Developed a lookalike of{" "} */}
                  {/* <Link
                    href={project.websiteUrl}
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    target="_blank"
                  >
                    {project.name}
                  </Link> */}
                </Text>
                <Text>{project.description}</Text>
                <br />
                <Text></Text>
                <UnorderedList className="projectDetailsBullets">
                  {project.bullets.map((bullet, index) => (
                    <ListItem key={index}>{bullet}</ListItem>
                  ))}
                </UnorderedList>
                <br />
                <Text>
                  <u style={{ textDecoration: "underline" }}>Link :-</u>
                </Text>
                {/* <Flex flexWrap={"wrap"} gap="10px" mt="2">
                  {project.techStack.map((e) => (
                    <Flex
                      key={e.name + e.icon}
                      className="techStackProject"
                      gap={"5px"}
                    >
                      <Icon as={e.icon} boxSize={6} />
                      <Text>{e.name}</Text>
                    </Flex>
                  ))}
                </Flex> */}

                <Flex className="ProjectLinks" gap="30px" mt="4">
                  <Link href={project.githubUrl} target="_blank">
                    <Button bg={"blue.500"} w="100px">
                      Video
                    </Button>
                  </Link>
                  {/* <Link href={project.demoUrl} target="_blank">
                    <Button bg={"blue.500"} w="100px">
                      Demo
                    </Button>
                  </Link> */}
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
