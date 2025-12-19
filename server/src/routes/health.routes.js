const { Router } = require("express");

const router = Router();

router.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        service: "mern-backend",
        timestamp: new Date().toISOString()
    });
});

// export default router;
module.exports = router
