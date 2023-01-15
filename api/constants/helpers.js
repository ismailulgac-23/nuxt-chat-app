module.exports.createTx = async (callback, res) => {
  try {
    await callback();
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({
      error: error.message ?? "Something went wrong!",
    });
  }
};
