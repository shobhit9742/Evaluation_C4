// import { useState } from "react";

// function CreateEvent() {
//   // Define state to manage the table data for the first table
//   const [tableData1, setTableData1] = useState([
//     { description: "", price: "", reference: "" },
//   ]);

//   // Define state to manage the table data for the second table
//   const [tableData2, setTableData2] = useState([
//     { description: "", price: "", reference: "" },
//   ]);

//   // Define states for form fields
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [eventTime, setEventTime] = useState("");
//   const [proposedBy, setProposedBy] = useState("");
//   const [eventType, setEventType] = useState("");
//   const [eventPlace, setEventPlace] = useState("");
//   const [eventDescription, setEventDescription] = useState("");
//   const [eventGoal, setEventGoal] = useState("");
//   const [expectedParticipants, setExpectedParticipants] = useState("");
//   const [expectedParticipantsCount, setExpectedParticipantsCount] =
//     useState("");
//   const [expectedTotalIncome, setExpectedTotalIncome] = useState("");
//   const [expectedTotalExpenses, setExpectedTotalExpenses] = useState("");
//   const [ticketPrice, setTicketPrice] = useState("");
//   const [availableQuantity, setAvailableQuantity] = useState("");
//   const [promotionDetails, setPromotionDetails] = useState("");

//   // Function to add a new row to the first table
//   const addRow1 = () => {
//     setTableData1([
//       ...tableData1,
//       { description: "", price: "", reference: "" },
//     ]);
//   };

//   // Function to add a new row to the second table
//   const addRow2 = () => {
//     setTableData2([
//       ...tableData2,
//       { description: "", price: "", reference: "" },
//     ]);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare data for submission
//     const eventData = {
//       eventTitle,
//       eventDate,
//       eventTime,
//       proposedBy,
//       eventType,
//       eventPlace,
//       eventDescription,
//       eventGoal,
//       expectedParticipants,
//       expectedParticipantsCount,
//       expectedTotalIncome,
//       expectedTotalExpenses,
//       ticketPrice,
//       availableQuantity,
//       promotionDetails,
//       incomeDetails: tableData1,
//       expenseDetails: tableData2,
//     };

//     try {
//       const response = await fetch("/createEvent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(eventData),
//       });

//       if (response.ok) {
//         alert("Event created successfully");
//       } else {
//         alert("Failed to create event");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while creating the event");
//     }
//   };

//   return (
//     <>
//       <hr></hr>
//       <br></br>
//       <div className="flex justify-around">
//         <div className="grid md:grid-cols-2 md:gap-6"></div>
//         <ul className="flex justify-end">
//           <li className="mr-3">
//             <button
//               type="submit"
//               form="eventForm"
//               className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white align-right"
//             >
//               Approve
//             </button>
//           </li>
//           <li className="mr-3">
//             <a
//               className="inline-block border rounded py-1 px-3 bg-gray-300 text-black align-right"
//               href="#"
//             >
//               Back
//             </a>
//           </li>
//         </ul>
//       </div>
//       <br />
//       <form id="eventForm" onSubmit={handleSubmit}>
//         <div className="px-2">
//           <div className="flex justify-evenly">
//             <div className="flex w-2/3 ">
//               <h1>Basic Information</h1>
//             </div>
//           </div>
//           <br></br>
//           <div className="flex justify-around">
//             <div className="grid md:grid-cols-2 md:gap-6">
//               <div className="relative z-0 w-2/3 px-1 mb-8 group">
//                 <input
//                   type="text"
//                   name="eventTitle"
//                   value={eventTitle}
//                   onChange={(e) => setEventTitle(e.target.value)}
//                   className="block py-2.5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="eventTitle"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Event Title :
//                 </label>
//               </div>

//               <div className="relative z-0 w-2/3 px-1 mb-2 group">
//                 <input
//                   type="date"
//                   name="eventDate"
//                   value={eventDate}
//                   onChange={(e) => setEventDate(e.target.value)}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="eventDate"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Date
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-evenly">
//             <div className="grid md:grid-cols-2 md:gap-6">
//               <div className="relative z-0 w-2/3 px-1 mb-8 group">
//                 <input
//                   type="text"
//                   name="proposedBy"
//                   value={proposedBy}
//                   onChange={(e) => setProposedBy(e.target.value)}
//                   className="block py-2.5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="proposedBy"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Proposed by :
//                 </label>
//               </div>

//               <div className="relative z-0 w-2/3 px-1 mb-2 group">
//                 <input
//                   type="time"
//                   name="eventTime"
//                   value={eventTime}
//                   onChange={(e) => setEventTime(e.target.value)}
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//                 <label
//                   htmlFor="eventTime"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Time
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="text"
//               name="eventType"
//               value={eventType}
//               onChange={(e) => setEventType(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="eventType"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Event Type :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="text"
//               name="eventPlace"
//               value={eventPlace}
//               onChange={(e) => setEventPlace(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="eventPlace"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Event Place :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <textarea
//               name="eventDescription"
//               value={eventDescription}
//               onChange={(e) => setEventDescription(e.target.value)}
//               rows="4"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="eventDescription"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Event Description :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <textarea
//               name="eventGoal"
//               value={eventGoal}
//               onChange={(e) => setEventGoal(e.target.value)}
//               rows="4"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="eventGoal"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Event Goal :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="number"
//               name="expectedParticipants"
//               value={expectedParticipants}
//               onChange={(e) => setExpectedParticipants(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="expectedParticipants"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Expected Participants :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="number"
//               name="expectedParticipantsCount"
//               value={expectedParticipantsCount}
//               onChange={(e) => setExpectedParticipantsCount(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="expectedParticipantsCount"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Expected Participants Count :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="number"
//               name="expectedTotalIncome"
//               value={expectedTotalIncome}
//               onChange={(e) => setExpectedTotalIncome(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="expectedTotalIncome"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Expected Total Income :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="number"
//               name="expectedTotalExpenses"
//               value={expectedTotalExpenses}
//               onChange={(e) => setExpectedTotalExpenses(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="expectedTotalExpenses"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Expected Total Expenses :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="number"
//               name="expectedProfit"
//               value={expectedProfit}
//               onChange={(e) => setExpectedProfit(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="expectedProfit"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Expected Profit :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//               className="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="file"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               File :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="text"
//               name="createdBy"
//               value={createdBy}
//               onChange={(e) => setCreatedBy(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="createdBy"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Created By :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="date"
//               name="dateCreated"
//               value={dateCreated}
//               onChange={(e) => setDateCreated(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="dateCreated"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Date Created :
//             </label>
//           </div>

//           <div className="relative z-0 w-2/3 px-1 mb-2 group">
//             <input
//               type="text"
//               name="status"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//             />
//             <label
//               htmlFor="status"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Status :
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

// export default CreateEvent;

import axios from "axios";
import { useState } from "react";
import apiClient from "../ApiClient";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [description, setDescription] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("eventDate", eventDate);
    formData.append("eventTime", eventTime);
    formData.append("description", description);
    formData.append("ticketPrice", ticketPrice);
    if (image) {
      formData.append("image", image);
    }

    try {
      await apiClient.post("/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Handle success (e.g., redirect or show a success message)
    } catch (error) {
      console.error("Error creating event:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Event Date:
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
      </label>
      <label>
        Event Time:
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Ticket Price:
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          required
        />
      </label>
      <label>
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <button type="submit">Create Event</button>
    </form>
  );
}
