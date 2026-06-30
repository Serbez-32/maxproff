export default function initTeamSwitcher() {
    const teamTabs = document.querySelectorAll('.team__tabs-button');
    const teamCards = document.querySelectorAll('.team__card');

    for (let i = 0; i < teamTabs.length; i++){
        teamTabs[i].addEventListener('click', function () {

            for (let j = 0; j < teamTabs.length; j++){
                teamTabs[j].classList.remove('team__tabs-button--active');
                teamCards[j].classList.remove('team__card--active');
            }

            teamTabs[i].classList.add('team__tabs-button--active');
            teamCards[i].classList.add('team__card--active');
        })
    }
}