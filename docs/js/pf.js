let pf = (termObject) => {

    // object
    searchResultsDiv += "<div class='box-resultlist-eighty' id='" + termObject['item']['value'] + "'>";
    searchResultsDiv += "<h1 style='text-align:center;padding-bottom:10px;'>Object: " + termObject['label']['value'].replace("@en", "") + "</h1>";

    // add map / image
    searchResultsDiv += "<div id='map-poi' style='display: flex;justify-content: center;align-items: center;'>";
    searchResultsDiv += "<img src='" + termObject['image']['value'] + "' style='max-height:680px;max-width:680px;min-height:300px;min-width:300px;'>";
    searchResultsDiv += "</div>";

    // add Object Data
    searchResultsDiv += '<div id="object_details"></div>';
    objectdataDetailsDiv += '<br><h3><center><img src="al_circle_icon.png" height="80"></center></h3>';
    objectdataDetailsDiv += '<h3>Metadata</h3>';
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-uuid" + "'><li class='list-group-item panel-item'><span class='badge'>" + "URI / permalink" + "</span>" + termObject['item']['value'].replace("samian:", "http://data.archaeology.link/data/samian/") + "</li></ul>";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-label" + "'><li class='list-group-item panel-item'><span class='badge'>" + "label" + "</span>" + termObject['label']['value'] + "</li></ul>";
    let str_origin = "African Red Slip Ware digital (ARS3D)";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-origin" + "'><li class='list-group-item panel-item'><span class='badge'>" + "origin" + "</span>" + str_origin + "</li></ul>";
    let types = termObject['types']['value'].replaceAll("http://archaeology.link/ontology#", "lado:")
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-type" + "'><li class='list-group-item panel-item'><span class='badge'>" + "type" + "</span>" + types + "," + termObject['typ']['value'] + "</li></ul>";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-identifier" + "'><li class='list-group-item panel-item'><span class='badge'>" + "identifier" + "</span>" + termObject['identifier']['value'] + "</li></ul>";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-update" + "'><li class='list-group-item panel-item'><span class='badge'>" + "last update" + "</span>" + termObject['lastupdate']['value'] + "</li></ul>";
    // add project metadata
    objectdataDetailsDiv += '<h3>Project Data</h3>';
    let name1 = "Linked Open ARS";
    let name2 = "(" + str_origin + ")";
    let name_link1 = "https://github.com/RGZM/ars-lod";
    let name_link2 = "https://ars3d.rgzm.de/";
    let funding = "RGZM, Bundesministerium für Bildung und Forschung (BMBF)";
    let contact = "Department of Scientific IT, RGZM, Mainz (Dr. Allard Mees, Florian Thiery M.Sc.)";
    let date = "01/02/18 – 31/05/21";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "project-1" + "'><li class='list-group-item panel-item'><span class='badge'>" + "project" + "</span>" + "<a href='" + name_link1 + "' target='_blank'>" + name1 + "</a>" +
        " <a href='" + name_link2 + "' target='_blank'>" + name2 + "</a>" + "</li></ul>";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "project-2" + "'><li class='list-group-item panel-item'><span class='badge'>" + "funding" + "</span>" + "" + funding +
        "" + "</li></ul>";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "project-3" + "'><li class='list-group-item panel-item'><span class='badge'>" + "contact" + "</span>" + "" + contact + "" +
        "</li></ul>";
    objectdataDetailsDiv += "<ul class='list-group panel-item2' id='" + "project-4" + "'><li class='list-group-item panel-item'><span class='badge'>" + "duration" + "</span>" + "<i>" + date + "</i>" + "</li></ul>";
    objectdataDetailsDiv += '</div>';

    // add object metadata
    searchResultsDiv += '<div id="object_technicaldata"></div>';
    objectdataTechnicalDetailsDiv += '<h3>Resource Data</h3>';
    //objectdataTechnicalDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-wikidata" + "'><li class='list-group-item panel-item'><span class='badge'>" + "Wikidata ID" + "</span>" + termObject['wikidata']['value'].replace("samian:", "http://data.archaeology.link/data/samian/") + "</li></ul>";
    /*if (termObject['pleiades']['value'] == "undefined") {
        objectdataTechnicalDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-pleiades" + "'><li class='list-group-item panel-item'><span class='badge'>" + "Pleiades ID" + "</span>" + "<span class='label label-default font12'>not defined</span>" + "</li></ul>";
    } else {
        objectdataTechnicalDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-pleiades" + "'><li class='list-group-item panel-item'><span class='badge'>" + "Pleiades ID" + "</span>" + termObject['pleiades']['value'].replace("samian:", "http://data.archaeology.link/data/samian/") + "</li></ul>";
    }
    if (termObject['ancientName']['value'] == "undefined") {
        objectdataTechnicalDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-ancientname" + "'><li class='list-group-item panel-item'><span class='badge'>" + "ancient name" + "</span>" + "<span class='label label-default font12'>not defined</span>" + "</li></ul>";
    } else {
        objectdataTechnicalDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-ancientname" + "'><li class='list-group-item panel-item'><span class='badge'>" + "ancient name" + "</span>" + termObject['ancientName']['value'].replace("samian:", "http://data.archaeology.link/data/samian/") + "</li></ul>";
    }
    objectdataTechnicalDetailsDiv += "<ul class='list-group panel-item2' id='" + "object-geom" + "'><li class='list-group-item panel-item'><span class='badge'>" + "geometry (point)" + "</span>" + termObject['geom']['value'] + "</li></ul>";*/

    $("#content_kacheln").html(searchResultsDiv);
    $("#objectdata_images").html(objectdataImagesDiv);
    $("#object_details").html(objectdataDetailsDiv);
    $("#object_technicaldata").html(objectdataTechnicalDetailsDiv);
};