$(() => {
    console.log("hi")
    $(".folder").animate({height:"600px"})

    //first color
    const createBackground = () => {
        //set random number of tiles (min 50)
        let tileCount = Math.floor(Math.random() * 100) + 50
        console.log(tileCount)

        for (i=0;i<tileCount;i++){
            let randomWidth = Math.floor(Math.random() * 200) + 1
            let randomLeftPos = Math.floor(Math.random() * 90)
            let randomTopPos = Math.floor(Math.random() * 200)
            let randomHeight = Math.floor(Math.random() * 100) + 10
            $newBackgroundDiv = $('<div>')
                .text(" ")
                .addClass('randomBackgroundDiv')
                .css("width", randomWidth + "px")
                .css("left",randomLeftPos + "%")
                .css("top", randomTopPos + "px")
                .css("height", randomHeight)
            $('.randomBoxesContainer').prepend($newBackgroundDiv)
        }

    }

    //second color
    const createBackgroundAltColor = () => {
        //set random number of tiles (min 50)
        let tileCount = Math.floor(Math.random() * 100) + 50
        console.log(tileCount)

        for (i=0;i<tileCount;i++){
            let randomWidth = Math.floor(Math.random() * 200) + 1
            let randomLeftPos = Math.floor(Math.random() * 90)
            let randomTopPos = Math.floor(Math.random() * 200)
            let randomHeight = Math.floor(Math.random() * 100) + 10
            $newBackgroundDiv = $('<div>')
                .text(" ")
                .addClass('randomBackgroundDivAltColor')
                .css("width", randomWidth + "px")
                .css("left",randomLeftPos + "%")
                .css("top", randomTopPos + "px")
                .css("height", randomHeight)
            $('.randomBoxesContainer').prepend($newBackgroundDiv)
        }

    }

    const titleAnimation = () =>{
        // $('#title').animate({height: '75px'}, "slow")
        $('#title').animate({width: '250px'}, 500)
       
    }

    const toggleSkills = () =>{
        $('.mainContent').toggle()
        $('.skills').toggle()
        $('.about.').hide()
    }

    const toggleAbout = () => {
        $('.mainContent').toggle()
        $('.about').toggle()
        $('.skills').hide()
    }

    const showElement = (element) => {
        $('.mainContent').hide()
        $('.skills').hide()
        $('.about').hide()

        $(element).show()
    }

    const showProjectDivs = (divsIdArray) => {
        divsIdArray.forEach(iterator)
        function iterator(item,index){
            divtoShow = "#" + item
            //console.log(divtoShow)
           $(divtoShow).show()
        }
    }

    const hideProjectDivs = (divsIdArray) => {
        divsIdArray.forEach(iterator)
        function iterator(item,index){
            divtoShow = "#" + item
            //console.log(divtoShow)
           $(divtoShow).hide()
        }
    }

    $('#indexr')
    .mouseover(() =>{
        showProjectDivs(["indexr1","indexr2"])
        $('#indexr').css("height","375px")
    })
    .mouseout(() =>{
        hideProjectDivs(["indexr1","indexr2"])
        $('#indexr').css("height","unset")
    })

    $('#calendarJournal')
        .mouseover(() =>{
            showProjectDivs(["calendarJournal1","calendarJournal2"])
            $('#calendarJournal').css("height","400px")
        })
        .mouseout(() =>{
            hideProjectDivs(["calendarJournal1","calendarJournal2"])
            $('#calendarJournal').css("height","unset")
    })

    $('#bikeRace')
        .mouseover(() =>{
            showProjectDivs(["bikeRace1","bikeRace2"])
            $('#bikeRace').css("height","450px")
        })
        .mouseout(() =>{
            hideProjectDivs(["bikeRace1","bikeRace2"])
            $('#bikeRace').css("height","unset")
    })

    $('#studyGuide')
        .mouseover(() =>{
            showProjectDivs(["studyGuide1","studyGuide2"])
            $('#studyGuide').css("height","450px")
        })
        .mouseout(() =>{
            hideProjectDivs(["studyGuide1","studyGuide2"])
            $('#studyGuide').css("height","unset")
    })      
        
    $('#bucketList')
        .mouseover(() =>{
            showProjectDivs(["bucketList1","bucketList2"])
            $('#bucketList').css("height","450px")
        })
        .mouseout(() =>{
            hideProjectDivs(["bucketList1","bucketList2"])
            $('#bucketList').css("height","unset")
     })


     $('#skillsId').click(() => {
         showElement('.skills')
     })

     $('#about').click(() => {
         showElement('.about')
     })

    //display background rectangles
    createBackground()
    createBackgroundAltColor()
     titleAnimation()

    

})