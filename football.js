window.onload = function() {
    //create an array of football team
    let teams  = [
        { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
        { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
        { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
        { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
    ];
    let selectMenu = document.getElementById('teams');
    console.log(`the select menu is ${selectMenu}`);
    console.log(selectMenu);
    let moreInfoBtn = document.getElementById('moreInfo');
    console.log(`the select menu is ${moreInfoBtn}`);
    console.log(moreInfoBtn);

    let numOfTeams = teams.length;
    console.log(`Number of team is: ${numOfTeams}`);
    console.log(numOfTeams);
    for (let i = 0; i < numOfTeams; i++) {
        let theOption = new Option(teams[i].name,teams[i].code);
        console.log(theOption);
        selectMenu.appendChild(theOption);
    }

    ///add an event listener
    moreInfoBtn.addEventListener('click', getTeamName);


    //add an event handler
    function getTeamName() {
        console.log('button works');
        let teamCode = selectMenu.value;
        console.log(teamCode);
        let teamName = selectMenu.options[selectMenu.selectedIndex].text;
        console.log(`you select ${teamName} with code ${teamCode}`)

    }

    ///remove an option from list
    // let itemToDelete = "DAL";
    // let numberOfOptionsTags = selectMenu.options.length;
    // for (let i = 0; i < numberOfOptionsTags; i++) {
    //     if (selectMenu.options[i].value == itemToDelete) {
    //         selectMenu.remove(i);
    //         break;  
    //        }

    // }
    
    ///this is an event listener
    selectMenu.onchange = onTeamChanged;

    ////this is an event handler
    function onTeamChanged() {
        // console.log('it works onTeamChanged');
        let selectTeam = selectMenu.value;
        console.log(`you changed your team to ${selectTeam}`);

    }

}
