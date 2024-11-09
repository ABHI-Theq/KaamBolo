import User from './../model/Schema.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
export const SignUp=async (req,res)=>{
   try{const  {name,email,password,skills,confirmPassword,role}=req.body;
   if(!name || !email || !password || !confirmPassword || !role){
    return res.status(400).json({error:"Please fill all the fields"})
   }

   if(password!==confirmPassword){
    return res.status(400).json({error:"password and confirmpassword do not match"});
   }


   const hash=await bcrypt.genSalt(10);
   const pwd=await bcrypt.hash(password,hash);

   const newuser=new User({
    name:name,
    email:email,
    Skills:skills,
    password:pwd,
    CleanPassword:password,
    role:role
   })

   await newuser.save();

   const token=jwt.sign({name,password,email},process.env.JWT_SECRET,{
    expiresIn:"15d"
   })

   res.cookie('jwt',token,{
    httpOnly:true,
    sameSite:"strict",
    secure:process.env.NODE_ENV !== "dev" ,
    maxAge:15*24*60*60*1000
});

res.status(200).json({
    _id:newuser._id,
    fullName:newuser.name,
    email:newuser.email,
    profilePic:newuser.profilePic
})
}catch(e){
    return res.status(500).json({error:e.message})
}

}

export const login=async (req,res)=>{
    try{const {email,password}=req.body;

    let user=await User.findOne({email:email});
    if(!user){
        return res.status(400).json({error:"Invalid email"})
    }    

    const isMatch=bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({error:"Invalid password"})
    }

    
   await user.save();

    const name=user.name;
   const token=jwt.sign({name,password,email},process.env.JWT_SECRET,{
    expiresIn:"15d"
   })

   res.cookie('jwt',token,{
    httpOnly:true,
    sameSite:"strict",
    secure:process.env.NODE_ENV !== "dev" ,
    maxAge:15*24*60*60*1000
});
    return res.status(201).json({
        _id:user._id,
        fullName:user.name,
        email:user.email,
    })
}catch(e){
    return res.status(400).json({error:e.message});
}
}

export const logout=async(req,res)=>{
    res.clearCookie('jwt');
    return res.status(201).json({msg:"logged out successfully"})
}