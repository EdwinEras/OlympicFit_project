// // pages/api/users.ts
// import axios from "axios";

// // Backend API route (external API)
// const API_URL = "http://localhost:3001/users";

// export default async function handler(req, res) {
//     try {
//         switch (req.method) {
//             case "GET":
//                 const getUsersResponse = await axios.get(API_URL);
//                 return res.status(200).json(getUsersResponse.data);

//             case "POST":
//                 const createUserResponse = await axios.post(API_URL, req.body, {
//                     headers: { "Content-Type": "application/json" },
//                 });
//                 return res.status(201).json(createUserResponse.data);

//             case "PUT":
//                 if (!req.query.id) return res.status(400).json({ error: "User ID is required" });
//                 const updateUserResponse = await axios.put(`${API_URL}/${req.query.id}`, req.body);
//                 return res.status(200).json(updateUserResponse.data);

//             case "DELETE":
//                 if (!req.query.id) return res.status(400).json({ error: "User ID is required" });
//                 const deleteUserResponse = await axios.delete(`${API_URL}/${req.query.id}`);
//                 return res.status(200).json(deleteUserResponse.data);

//             default:
//                 return res.status(405).json({ error: "Method Not Allowed" });
//         }
//     } catch (error) {
//         console.error("API Error:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// }
