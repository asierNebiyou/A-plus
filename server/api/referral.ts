import { Referral } from "~/server/models/referral.model";

export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  const query = getQuery(event);


if (method === "GET") {
  if (query.code) {
    const referral = await Referral.findOne({ code: query.code });
    
    if (!referral) return { message: "Referral not found" };

    return {
      ...referral.toObject(),
      actions: Object.fromEntries(referral.actions) // Convert Map to Object
    };
  } else {
    const referrals = await Referral.find();

    return referrals.map(referral => ({
      ...referral.toObject(),
      actions: Object.fromEntries(referral.actions) // Convert Map to Object
    }));
  }
}

  // if (method === "POST") {
  //   var body = await readBody(event);
  //   const { email } = body;
  //   if (!email) return { error: "Email is required" };

  //   const code = Buffer.from(email).toString("base64").slice(0, 10);
  //   const existingReferral = await Referral.findOne({ code });

  //   if (existingReferral) return existingReferral;

  //   const newReferral = await Referral.create({
  //     email,
  //     code,
  //     clicks: 0,
  //     actions: {}
  //   });

  //   return newReferral;
  // }

  if (method === "PUT") {
           var body = await readBody(event);
          const { code, action } = body;
          if (!code) return { error: "Referral code is required" };
         
          const referral = await Referral.findOne({ code });
          if (!referral) return { error: "Referral not found" };

          if (action) {
            referral.actions.set(action, (referral.actions.get(action) || 0) + 1);
          } 
          referral.clicks += 1;
          

          await referral.save();
          return referral;
  }

  // if(method==="DELETE"){
  //    var body = await readBody(event);
  //     const { _id } = body;
  //     console.log(body)
  //     const deletedPlan = await Referral.findByIdAndDelete(_id);
  //     return deletedPlan ? { success: true } : { error: "Failed to delete pricing plan" };


  // }
});
