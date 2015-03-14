/**
 * Created by Jasper on 14/03/15.
 */

Template.page.rendered = function (){

    Session.set ("image", 1)




}

Template.page.helpers ({
    image: function(){
        return Session.get ("image")
    },

    story:function (){
        story = ["Op een warme zomer ochtend werd Coco wakker gemaakt door zijn Mama. ‘weet je wat voor dag het is?’ vroeg mama. ‘Ja!’ zei Coco, ‘vandaag is de WhoehoeSlingerwedstrijd, de grootste slingerwedstrijd van het jaar!’ Coco heeft weken geoefend om met zijn staart  zo snel mogelijk van tak naar tak te zwaaien.",
            "HIER TESKT PAGINA 2",
            "HIER TESKT PAGINA 3",
        "HIER TESKT PAGINA 4",
        "HIER TESKT PAGINA 5",
        "HIER TESKT PAGINA 6"]
        return story[Session.get ("image") -1 ]
    }
})

Template.page.events ({

    "click .next": function(){
        if (Session.get("image") < 6) {
            image = Session.get("image") + 1

            Session.set("image", image)
        }
    },

    "click .back": function(){
        if (Session.get("image")>1) {
            image = Session.get("image") - 1

            Session.set("image", image)
        }
    }

})