// import { Link } from "react-router-dom";
// import { useGetPostsQuery } from "../../../../redux/api/api";
// import Modal from "../../../../ui/Modal";
// import { useState } from "react";

// const Supplies = () => {
//   const [modal, setModal] = useState(false);
//   const [selectedData, setSelectedData] = useState(null);
//   const { data, isError, isLoading } = useGetPostsQuery(undefined);

//   if (isLoading) {
//     return (
//       <div className="h-screen text-4xl font-semibold text-black flex items-center justify-center">
//         Loading....
//       </div>
//     );
//   }

//   const handleModalClose = () => {
//     setModal((prev) => !prev);
//   };
//   const handleEditClick = (postData) => {
//     setSelectedData(postData); // Set the selected data
//     setModal(true); // Open the modal
//   };
//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         {/* head */}
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Available Quantity</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* row 1 */}
//           {data.map((post) => (
//             <tr key={post._id}>
//               <th>
//                 <div className="image">
//                   <div className="mask mask-squircle w-12 h-12 ">
//                     <img
//                       src={post.image}
//                       alt="Post Image"
//                       className="rounded-full"
//                     />
//                   </div>
//                 </div>
//               </th>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="font-bold">{post.title}</div>
//                   </div>
//                 </div>
//               </td>
//               <td>{post.category}</td>
//               <td>{post.quantity}</td>

//               <td>
//                 <button
//                   onClick={() => handleEditClick(post)}
//                   className="btn  btn-xs"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="update-btn w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//                     />
//                   </svg>
//                 </button>
//               </td>
//               <td>
//                 <button className="btn  btn-xs">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="delete-btn w-6 h-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                     />
//                   </svg>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//         <Modal isModalOpen={modal} onClose={handleModalClose}>
//           <Modal.Header>
//             <h1>This is modal</h1>
//             {selectedData && (
//               <div>
//                 {/* Display selected data in the modal */}
//                 <p>Title: {selectedData.title}</p>
//                 <p>Category: {selectedData.category}</p>
//                 <p>Quantity: {selectedData.quantity}</p>
//                 {/* Add more fields as needed */}
//               </div>
//             )}
//             <Modal.CloseButton></Modal.CloseButton>
//           </Modal.Header>
//         </Modal>
//       </table>
//     </div>
//   );
// };

// export default Supplies;
