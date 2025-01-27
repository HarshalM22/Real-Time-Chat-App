import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
const app = express();
import { RoomSchema, UserSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

app.use(express.json());

app.post("/api/v1/excelidraw/sign-up", async (req, res) => {
  const parsedData = UserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  try {
    const createUSer = await prismaClient.user.create({
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

app.post("/api/v1/excelidraw/sign-in", async (req, res) => {
  const parsedData = UserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  const find = await prismaClient.user.findUnique({
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
      userId: find.userId,
    },
    JWT_SECRET
  );
  res.json({
    token,
  });
});

app.post("/api/v1/room", middleware, async(req, res) => {
  const RoomData = RoomSchema.safeParse(req.body);
  if(!RoomData){
    res.json({
        message : "Incorrect Inputs"
    })
    return ;
  }
//   @ts-ignore
  const userId = req.userId ; 
  
  try{
  const Room = await prismaClient.room.create({
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








app.listen(8081);
