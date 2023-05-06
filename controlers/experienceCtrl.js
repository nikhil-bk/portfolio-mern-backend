
const experienceSchema = require('../models/experienceModel');



// .....get education user.......
exports.getExperience = async (req, res)=>{
  
    const experience = await experienceSchema.find();
    
    try {
      res.json(experience);
    } catch (error) {
      res.status(500).json({msg:'server problem'})
    }
    
    }
  
  
  // .....add education user.......
  exports.addExperience =  async (req, res)=>{
    const {company_name,start_and_end,job_title,technology} = req.body;
  
  try {
  
    const newExperience = new experienceSchema({
      company_name,
      start_and_end,
      job_title,
      technology
    })
    
    await newExperience.save();
    res.json({msg:'Experience added'});
    
  } catch (error) {
     res.status(500).json({msg:'server problem'})
  }
  
  
  }
  
  // .....get specific education user by id .......
  exports.getExperienceId= async (req, res)=>{
  
    try {
      const experience= await experienceSchema.findById(req.params.id);
    res.json(experience);
    
    } catch (error) {
      res.status(500).json({msg:'server problem'})
    }
    
    
    }
    
    // .....update specific education user by id.......
  exports.updateExperience = async (req, res)=>{
    const {company_name,start_and_end,job_title,technology} = req.body;
   
    try {
     const newExperience = await experienceSchema.findByIdAndUpdate(req.params.id, {
  
      company_name,
      start_and_end,
      job_title,
      technology
   
      });
   
      let results = await newExperience.save();
      await results;
      res.json({msg:'Item updated'})
      
    } 
    catch (error) {
     res.status(500).json({msg:'server problem'})
    }
  
  
  
  }
  
  // .....delete specific education user by id.......
    exports.delExperience = async (req, res)=>{
      const experience = await experienceSchema.findByIdAndDelete(req.params.id)
   
     experience;
   
      res.json({msg:"Item deleted"})
   
   }
  
  