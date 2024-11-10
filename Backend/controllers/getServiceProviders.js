import User from '../model/Schema.js'

export const getServiceProvider=async(req,res)=>{
    try {
        console.log((req.params.id).toLowerCase());
        const skill=(req.params.id).toLowerCase();
        const users = await User.find({
            Skills: {
              $in: [skill],         // Matches users with the specified skill
              $exists: true,        // Ensures the `skills` field exists
              $not: { $size: 0 }    // Ensures `skills` array has at least one element
            }})
            console.log(users);
            
            return res.status(201).json({users});
    } catch (error) {
        return res.status(400).json({error:e.message});
    }
}
