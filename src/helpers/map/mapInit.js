export default function mapInit(data, coll, ymaps){
    let map = new ymaps.Map(`${data.selector.id}`,{
      center:data.mapCenter,
      zoom:data.zoom,
      controls: ['zoomControl']
    })
    if(coll && coll.length){
        coll.forEach(item => {
            let {centerPlacemark,ballunContent,presetPlacemark,iconCaption} = item
            const placemark = new ymaps.Placemark(centerPlacemark, {
                balloonContent:`
                    <div class="ballun-body">
                        <strong class="ballun-body__title">${ballunContent.text}</strong>
                        <div class="ballun-body__img">
                            <img src=${ballunContent.imgBallun} alt="">
                        </div>
                    </div>
                `,
                iconCaption
            }, {
                preset:presetPlacemark,
                iconCaptionMaxWidth: '200',
            })
            map.geoObjects.add(placemark)
        })
    }
}