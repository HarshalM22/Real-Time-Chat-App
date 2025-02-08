import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { RoomSchema, UserSchema } from "@repo/common/types";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());

app.post("/api/v1/sign-up", async (req, res) => {
  const parsedData = UserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  try {
    const createUSer = await client.user.create({
      data: {
        name: parsedData.data?.name,
        password: parsedData.data?.password,
        email: parsedData.data?.email,
        username: parsedData.data?.username,
      },
    });
    if (createUSer) {
      res.json({
        message: "user has been created",
      });
    }
  } catch (e) {
    res.status(411).json({
      message: e,
    });
  }
});

app.post("/api/v1/sign-in", async (req, res) => {
  const parsedData = UserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  const find = await client.user.findFirst({
    where: {
      name: parsedData.data?.username,
      password: parsedData.data.password,
    },
  });

  if (!find) {
    res.status(403).json({
      message: "Not Authorized",
    });
    return;
  }

  const token = jwt.sign(
    {
      userId: find.id,
    },
    JWT_SECRET
  );
  res.json({
    token,
  });
});

app.post("/api/v1/room", middleware, async(req, res) => {
  const RoomData = RoomSchema.safeParse(req.body);
  if(!RoomData || RoomData.data?.roomName==undefined || null){
    res.json({
        message : "Incorrect Inputs"
    })
    return ;
  }
  // @ts-ignore
  const userId = req.userId ; 
  
  try{
  const Room = await client.room.create({
    data:{
      slug : RoomData.data?.roomName,
      adminId : userId
    }
  })
  res.json({
    roomId : Room.id
  });
}catch(e){
    res.status(411).json({
        message : "room alreasy exists with this name"
    })
}
});

app.get("/chats/:roomId",async (req,res)=>{
  const roomId = Number(req.params.roomId);
  const messages = await client.chat.findMany({
    where:{
      roomId : roomId
    },
    orderBy:{
      id:"desc"
    },
    take:50
  });

  res.json({
    messages
  })
})






app.listen(8081);
