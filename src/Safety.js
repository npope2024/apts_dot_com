export default function Safety({grades}) {
    return (
        <section class="safety" id="safetySection">
            <h2>Safety</h2>
            <div class="mortar-wrapper">
                We know safety is important to you, that's why we provide data on crime rates for areas you may be looking at.
            </div>
            <div class="safetyContainer">
                <div class="safetyCard">
                    <div class="safetyGrade" id="generalCrimeRateGrade">{grades[0]}</div>
                    <h3 class="safetyGradeName">General</h3>
                </div>
                <div class="safetyCard">
                    <div class="safetyGrade" id="propertyCrimeRateGrade">{grades[1]}</div>
                    <h3 class="safetyGradeName">Property</h3>
                </div>
                <div class="safetyCard">
                    <div class="safetyGrade" id="violentCrimeRateGrade">{grades[2]}</div>
                    <h3 class="safetyGradeName">Violent</h3>
                </div>
            </div>
            <div class="safetySummaryInfoWrapper">
                <div class="safetyGrade" id="overallCrimeRateGrade">{grades[3]}</div>
                <h3 class="safetyGradeName">Overall</h3>
            </div>
        </section>
    );
}