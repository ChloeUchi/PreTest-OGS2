export class Robot {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.angle = 0; // Represents the direction the robot is facing: 0 - up, 1 - right, 2 - down, 3 - leftt
        this.robotSteps = [
            [this.x, this.y]
        ];
    }

    execute(code) {
        for (const char of code) {
            if (char.toUpperCase() === "W") {
                this.move();
            } else if (char.toUpperCase() === "L") {
                this.turnLeft();
            } else if (char.toUpperCase() === "R") {
                this.turnRight();
            }
        }
    }

    move() {
        switch (this.angle % 4) {
            case 0: // Up
                this.y += 1;
                break;
            case 1: // Right
                this.x += 1;
                break;
            case 2: // Down
                this.y -= 1;
                break;
            case 3: // Left
                this.x -= 1;
                break;
            default:
                break;
        }
        this.robotSteps.push(this.getPosition());
    }

    turnLeft() {
        this.angle = (this.angle + 3) % 4; // Turning left is equivalent to rotating counter-clockwise
    }

    turnRight() {
        this.angle = (this.angle + 1) % 4; // Turning right is equivalent to rotating clockwise
    }

    getPosition() {
        return [this.x, this.y];
    }

    getSteps() {
        return this.robotSteps;
    }
}



export class RobotPlate {
    constructor(robotSteps) {
        this.robotSteps = robotSteps
        this.plate = []

        if (this.robotSteps) {
            // Get max value from robot steps
            let maxSize = 0
            for (let robotStep of this.robotSteps) {
                const positiveRobotStep = robotStep.map(e => Math.abs(e))
                const maxRobotStepSize = Math.max(...positiveRobotStep)
                if (maxRobotStepSize > maxSize) {
                    maxSize = maxRobotStepSize
                }
            }

            // Create 2D plate
            for (let x of Array(maxSize * 2 + 1)) {
                let plateX = []
                for (let y of Array(maxSize * 2 + 1)) {
                    plateX.push("O")
                }
                this.plate.push(plateX)
            }

            for (let stepIndex = 0; stepIndex < this.robotSteps.length; stepIndex++) {
                let symbol = "O"
                if (stepIndex == 0) {
                    symbol = "S"
                } else if (stepIndex == this.robotSteps.length - 1) {
                    symbol = "E"
                } else {
                    symbol = "P"
                }
                this.plate[-this.robotSteps[stepIndex][1] + maxSize][
                    this.robotSteps[stepIndex][0] + maxSize
                ] = symbol
            }
        }
    }

    getPlate() {
        return this.plate
    }

    display() {
        for (let x of this.plate) {
            console.log(x.join(" "))
        }
    }
}