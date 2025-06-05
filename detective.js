function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const attendancePoints = 3;
const days = 20;
const successPoints = 13;
const failPoints = 1;

let vacationDays = 0;
let successes = 0;
let failures = 0;

for (let i = 0; i < days; i++) {
	try {
		mysteryOperation();
		vacationDays += successPoints;
		successes += 1;
	} catch (err){
		vacationDays += failPoints;
		failures += 1;
	} finally {
		vacationDays += attendancePoints;
	}
}

console.log(`You completed ${successes} missions and failed ${failures} missions!`);
console.log(`You deserve ${vacationDays} days of vacation!`);