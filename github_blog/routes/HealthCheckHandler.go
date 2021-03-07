package routes

import (
	"github.com/gin-gonic/gin"
)

func HealthCheck(c *gin.Context) {
	c.String(200, "Success")
}
