import User from '../model/Schema.js'

export const getServiceProvider=async(req,res)=>{
    try {
        // console.log((req.params.id).toLowerCase());
        
        const users = await User.find({
            Skills: {
              $in: [(req.params.id).toLowerCase()],         // Matches users with the specified skill
              $exists: true,        // Ensures the `skills` field exists
              $not: { $size: 0 }    // Ensures `skills` array has at least one element
            }})
            return res.status(201).json({users});
    } catch (error) {
        return res.status(400).json({error:e.message});
    }
}
