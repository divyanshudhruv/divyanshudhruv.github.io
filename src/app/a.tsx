// "use client";
// import Waves from "@/components/Waves";
// import {
//   Heading,
//   Text,
//   Column,
//   Badge,
//   Logo,
//   Line,
//   LetterFx,
//   Row,
//   Background,
//   Button,
//   Icon,
//   Flex,
//   Kbd,
// } from "@once-ui-system/core";

// import React from "react";
// import { Instrument_Serif, Lato } from "next/font/google";
// import {
//   HorseIcon,
//   HeartIcon,
//   CubeIcon,
//   EnvelopeSimpleIcon,
// } from "@phosphor-icons/react";

// import AnimatedDisplay from "@/components/AnimatedDisplay";
// const inst = Instrument_Serif({
//   subsets: ["latin"],
//   weight: "400",
// });
// const lato = Lato({
//   subsets: ["latin"],
//   weight: "300",
// });
// export default function Home() {
//   const [date, setDate] = React.useState<Date | undefined>(new Date());

//   return (
//     <Column
//       fillWidth
//       horizontal="center"
//       vertical="start"
//       style={{ minHeight: "100vh", backgroundColor: "#FAFAFA" }}
//       gap={4}
//     >
//       <Row fillWidth minHeight="24">
//         <Background
//           fill
//           fillHeight
//           lines={{
//             display: true,
//             opacity: 30,
//             size: "2",
//             thickness: 1,
//             color: "neutral-solid-strong",
//           }}
//         />
//       </Row>

//       <Column fillWidth maxWidth={"s"} paddingX={"l"} gap={12}>
//         <Row
//           fillWidth
//           horizontal="between"
//           paddingX={2}
//           vertical="center"
//           fitHeight
//           borderLeft="neutral-medium"
//           borderWidth={8}
//         >
//           <Column>
//             <Text
//               variant="display-default-xs"
//               onBackground="neutral-alpha-strong"
//               style={{ lineHeight: "1" }}
//             >
//               <span className="font-reckless-light">Divyanshu</span>
//               <br />
//               Dhruv
//             </Text>
//           </Column>

//           <Button variant="secondary" size="s">
//             <Text variant="label-default-s" onBackground="neutral-weak">
//               <Row center gap="4">
//                 <EnvelopeSimpleIcon size={16} />
//                 <span>Contact</span>
//               </Row>
//             </Text>
//           </Button>
//         </Row>
//       </Column>

//       <Flex maxWidth="s" paddingX={"l"}>
//         {" "}
//         <Column
//           fillWidth
//           horizontal="between"
//           paddingX={2}
//           vertical="center"
//           fitHeight
//           borderLeft="neutral-medium"
//           borderWidth={8}
//           gap={1}
//         >
//           <Row
//             fillWidth
//             border="neutral-weak"
//             padding="s"
//             background="neutral-weak"
//             horizontal="between"
//             radius="s"
//             maxWidth={"xs"}
//           >
//             <Row center gap={1}>
//               <Flex
//                 width={4}
//                 height={4}
//                 background="neutral-weak"
//                 center
//                 border="neutral-weak"
//                 radius="s"
//               >
//                 <img
//                   src="https://pssbvzyatajutwslvzgk.supabase.co/storage/v1/object/public/logos/fingerprint.svg"
//                   style={{ width: "40%", height: "40%" }}
//                 />
//               </Flex>
//               <Column vertical="center">
//                 <Text
//                   variant="heading-default-xl"
//                   onBackground="neutral-alpha-strong"
//                 >
//                   <span className="font-reckless-light">Fingerprint</span>
//                 </Text>
//                 <Text onBackground="neutral-medium" variant="label-default-m">
//                   Lead Developer
//                 </Text>
//               </Column>
//             </Row>
//             <Column vertical="center" horizontal="end" gap="8">
//               <Text variant="label-default-xs" onBackground="neutral-weak">
//                 From Jan, 2020
//               </Text>
//               <Row gap={"8"} fitWidth>
//                 <Kbd>
//                   <Text>Remote</Text>
//                 </Kbd>
//                 <Kbd>
//                   <Text>5 years</Text>
//                 </Kbd>
//               </Row>
//             </Column>
//           </Row><Row
//             fillWidth
//             border="neutral-weak"
//             padding="s"
//             background="neutral-weak"
//             horizontal="between"
//             radius="s"
//             maxWidth={"xs"}
//           >
//             <Row center gap={1}>
//               <Flex
//                 width={4}
//                 height={4}
//                 background="neutral-weak"
//                 center
//                 border="neutral-weak"
//                 radius="s"
//               >
//                 <img
//                   src="https://pssbvzyatajutwslvzgk.supabase.co/storage/v1/object/public/logos/fingerprint.svg"
//                   style={{ width: "40%", height: "40%" }}
//                 />
//               </Flex>
//               <Column vertical="center">
//                 <Text
//                   variant="heading-default-xl"
//                   onBackground="neutral-alpha-strong"
//                 >
//                   <span className="font-reckless-light">Fingerprint</span>
//                 </Text>
//                 <Text onBackground="neutral-medium" variant="label-default-m">
//                   Lead Developer
//                 </Text>
//               </Column>
//             </Row>
//             <Column vertical="center" horizontal="end" gap="8">
//               <Text variant="label-default-xs" onBackground="neutral-weak">
//                 From Jan, 2020
//               </Text>
//               <Row gap={"8"} fitWidth>
//                 <Kbd>
//                   <Text>Remote</Text>
//                 </Kbd>
//                 <Kbd>
//                   <Text>5 years</Text>
//                 </Kbd>
//               </Row>
//             </Column>
//           </Row><Row
//             fillWidth
//             border="neutral-weak"
//             padding="s"
//             background="neutral-weak"
//             horizontal="between"
//             radius="s"
//             maxWidth={"xs"}
//           >
//             <Row center gap={1}>
//               <Flex
//                 width={4}
//                 height={4}
//                 background="neutral-weak"
//                 center
//                 border="neutral-weak"
//                 radius="s"
//               >
//                 <img
//                   src="https://pssbvzyatajutwslvzgk.supabase.co/storage/v1/object/public/logos/fingerprint.svg"
//                   style={{ width: "40%", height: "40%" }}
//                 />
//               </Flex>
//               <Column vertical="center">
//                 <Text
//                   variant="heading-default-xl"
//                   onBackground="neutral-alpha-strong"
//                 >
//                   <span className="font-reckless-light">Fingerprint</span>
//                 </Text>
//                 <Text onBackground="neutral-medium" variant="label-default-m">
//                   Lead Developer
//                 </Text>
//               </Column>
//             </Row>
//             <Column vertical="center" horizontal="end" gap="8">
//               <Text variant="label-default-xs" onBackground="neutral-weak">
//                 From Jan, 2020
//               </Text>
//               <Row gap={"8"} fitWidth>
//                 <Kbd>
//                   <Text>Remote</Text>
//                 </Kbd>
//                 <Kbd>
//                   <Text>5 years</Text>
//                 </Kbd>
//               </Row>
//             </Column>
//           </Row>
//         </Column>
//       </Flex>

//       <Flex maxWidth="s" paddingX={"l"}>
//         {" "}
//         <Row
//           fillWidth
//           horizontal="between"
//           paddingX={2}
//           vertical="center"
//           fitHeight
//           borderLeft="neutral-medium"
//           borderWidth={8}
//         >
//           <Column horizontal="start" fillWidth gap={2}>
//             <Text
//               variant="heading-default-l"
//               onBackground="neutral-alpha-strong"
//             >
//               <span className="font-reckless-light">Who am I?</span>
//             </Text>
//             <Text variant="label-default-l" onBackground="neutral-weak">
//               I'm a full-stack developer with a passion for building beautiful,
//               interactive applications and websites. With a keen eye for detail
//               and a solid understanding of modern web technologies, I strive to
//               create solutions that are both visually appealing and highly
//               functional.
//               <br />
//               <br />I embrace the ability to work in a team and collaborate with
//               others to deliver robust and scalable solutions.
//             </Text>
//             <Row fillWidth minHeight="24">
//               <Background
//                 fill
//                 fillHeight
//                 lines={{
//                   display: true,
//                   opacity: 30,
//                   size: "2",
//                   thickness: 1,
//                   color: "neutral-solid-strong",
//                 }}
//               />
//             </Row>
//           </Column>
//         </Row>
//       </Flex>

//       <Flex height={40} />
//     </Column>
//   );
// }
