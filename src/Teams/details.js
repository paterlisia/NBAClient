// import Layout, {
//   getHeader,
//   getDrawerSidebar,
//   getSidebarTrigger,
//   getSidebarContent,
//   getCollapseBtn,
//   getContent,
//   getFooter,
//   // getInsetContainer,
//   // getInsetSidebar,
// } from "@mui-treasury/layout";

// // other components
// const InsetContainer = getInsetContainer(styled)
// const InsetSidebar = getInsetSidebar(styled)

// export default function Shits() {
//   return (
//     <Root scheme={scheme}>
//       {({ state: { sidebar } }) => (
//         <>
//           <CssBaseline />
//           <Header>
//             <Toolbar>
//               <SidebarTrigger sidebarId="primarySidebar" />
//               <HeaderMockUp />
//             </Toolbar>
//           </Header>
//           <DrawerSidebar sidebarId="primarySidebar">
//             <SidebarContent>
//               <NavHeaderMockUp collapsed={sidebar.primarySidebar.collapsed} />
//               <NavContentMockUp />
//             </SidebarContent>
//             <CollapseBtn />
//           </DrawerSidebar>
//           <Content>
//             <InsetContainer
//               rightSidebar={
//                 <InsetSidebar sidebarId="secondarySidebar">
//                   <NavContentMockUp />
//                 </InsetSidebar>
//               }
//             >
//               <ContentMockUp />
//             </InsetContainer>
//           </Content>
//           <Footer>
//             <FooterMockUp />
//           </Footer>
//         </>
//       )}
//     </Root>
//   );
// };