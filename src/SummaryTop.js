export default function SummaryTop() {
    return (
        <section class="summary" id="summarySection">
    
    
    
        <div class="summaryInfoWrapper mortar-wrapper">
            <div class="column columnOne">
        
                <div class="areaNameRow" id="areaNameRow">
                    <h1 class="areaName">Blacksburg, VA</h1>
                </div>
                <div class="areaNameRow" id="areaNameRow">
                    <h3>Area Guide</h3>
                </div>
            </div>
        
            <div class="column columnTwo">
                <div class="freshnessUserActionsContainer">
                    <div class="userActions ">
                        <div class="shareBox mortar-wrapper ">
                            <button rel="nofollow" class="sharingModalBtn js-showSharingModalLink" aria-label="Share listing" role="button">
                                <i class="storyicon rssShareStoryIcon" aria-hidden="true"></i>
                            </button>
                            <span class="mortar-tooltip">
                                <span class="mortar-tooltip-text bottom-center hover no-title" role="status">
                                    <span class="mortar-tooltip-inner-text-container">
                                        Share Guide
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </section>
    );
}