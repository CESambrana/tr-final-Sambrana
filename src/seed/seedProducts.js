import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
  {
    id: "aa1111",
    name: "Monitor Acer 144hz",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus fugiat non nihil voluptate soluta atque nulla quas earum. Dolorum in culpa consequatur aperiam excepturi sit veritatis voluptatum, sequi non eum tempore vitae rerum obcaecati consequuntur alias! Quia fugiat quisquam aliquid debitis pariatur ducimus quibusdam qui eius animi possimus earum ex, exercitationem distinctio fuga saepe inventore asperiores odio tenetur modi harum unde. Atque hic harum magni inventore reiciendis sapiente, consectetur impedit. Cumque nesciunt molestiae quibusdam praesentium odio quos magni maxime neque obcaecati quaerat veniam voluptatibus reiciendis ex voluptate autem, consequuntur molestias laudantium eum officiis tenetur labore voluptas? Temporibus, commodi doloribus.",
    stock: 3,
    price: 350000,
    image: "/img/acer-144hz.jpg",
    category: "monitores",
  },
  {
    id: "aa1122",
    name: "Monitor Acer 100hz",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus fugiat non nihil voluptate soluta atque nulla quas earum. Dolorum in culpa consequatur aperiam excepturi sit veritatis voluptatum, sequi non eum tempore vitae rerum obcaecati consequuntur alias! Quia fugiat quisquam aliquid debitis pariatur ducimus quibusdam qui eius animi possimus earum ex, exercitationem distinctio fuga saepe inventore asperiores odio tenetur modi harum unde. Atque hic harum magni inventore reiciendis sapiente, consectetur impedit. Cumque nesciunt molestiae quibusdam praesentium odio quos magni maxime neque obcaecati quaerat veniam voluptatibus reiciendis ex voluptate autem, consequuntur molestias laudantium eum officiis tenetur labore voluptas? Temporibus, commodi doloribus.",
    stock: 4,
    price: 250000,
    image: "/img/acer-100hz.jpg",
    category: "monitores",
  },
  {
    id: "aa1133",
    name: "Auriculares Hyperx",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus fugiat non nihil voluptate soluta atque nulla quas earum. Dolorum in culpa consequatur aperiam excepturi sit veritatis voluptatum, sequi non eum tempore vitae rerum obcaecati consequuntur alias! Quia fugiat quisquam aliquid debitis pariatur ducimus quibusdam qui eius animi possimus earum ex, exercitationem distinctio fuga saepe inventore asperiores odio tenetur modi harum unde. Atque hic harum magni inventore reiciendis sapiente, consectetur impedit. Cumque nesciunt molestiae quibusdam praesentium odio quos magni maxime neque obcaecati quaerat veniam voluptatibus reiciendis ex voluptate autem, consequuntur molestias laudantium eum officiis tenetur labore voluptas? Temporibus, commodi doloribus.",
    stock: 10,
    price: 90000,
    image: "/img/auriculares-hyperx.jpeg",
    category: "auriculares",
  },
  {
    id: "aa1434",
    name: "Auriculares Logitech",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus fugiat non nihil voluptate soluta atque nulla quas earum. Dolorum in culpa consequatur aperiam excepturi sit veritatis voluptatum, sequi non eum tempore vitae rerum obcaecati consequuntur alias! Quia fugiat quisquam aliquid debitis pariatur ducimus quibusdam qui eius animi possimus earum ex, exercitationem distinctio fuga saepe inventore asperiores odio tenetur modi harum unde. Atque hic harum magni inventore reiciendis sapiente, consectetur impedit. Cumque nesciunt molestiae quibusdam praesentium odio quos magni maxime neque obcaecati quaerat veniam voluptatibus reiciendis ex voluptate autem, consequuntur molestias laudantium eum officiis tenetur labore voluptas? Temporibus, commodi doloribus.",
    stock: 8,
    price: 115000,
    image: "/img/auriculares-logitech.png",
    category: "auriculares",
  },
  {
    id: "aa4324",
    name: "Monitor Samsung 75hz",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor necessitatibus fugiat non nihil voluptate soluta atque nulla quas earum. Dolorum in culpa consequatur aperiam excepturi sit veritatis voluptatum, sequi non eum tempore vitae rerum obcaecati consequuntur alias! Quia fugiat quisquam aliquid debitis pariatur ducimus quibusdam qui eius animi possimus earum ex, exercitationem distinctio fuga saepe inventore asperiores odio tenetur modi harum unde. Atque hic harum magni inventore reiciendis sapiente, consectetur impedit. Cumque nesciunt molestiae quibusdam praesentium odio quos magni maxime neque obcaecati quaerat veniam voluptatibus reiciendis ex voluptate autem, consequuntur molestias laudantium eum officiis tenetur labore voluptas? Temporibus, commodi doloribus.",
    stock: 4,
    price: 170000,
    image: "/img/samsung-75hz.avif",
    category: "monitores",
  },
];

const seedProducts = () => {
  const productsRef = collection(db, "products");
  products.map(({ id, ...dataProduct }) => {
    addDoc(productsRef, dataProduct);
  });
  console.log("productos subidos");
  return;
};

seedProducts();
