        var WilayahIndonesia = "https://www.haidarax.me/Wilayah-Indonesia/";

        function idasli(id, daftar) {
            return daftar.find(data => data.id === id)?.nama ?? null;
          }

        function clearOptions(id) {
          //  console.log("on clearOptions :" + id);

            //$('#' + id).val(null);
            //$('#' + id).hide();
            $('#' + id).empty().trigger('change');
        }
        $('#select2-kabupaten,#select2-kecamatan,#select2-kelurahan').hide();
        console.log('Load Provinsi...');
        $.getJSON(WilayahIndonesia + "provinsi.json", function (res) {

            res = $.map(res, function (obj) {
                obj.text = obj.nama
                obj.nama = obj.id
                obj.id = obj.text
                return obj;
            });

            dataprov = [{
                id: "",
                nama: "Pilih Provinsi",
                text: "Pilih Provinsi"
            }].concat(res);

            console.log(dataprov);

            //implemen data ke select provinsi
            $("#select2-provinsi").select2({
                dropdownAutoWidth: true,
                width: '100%',
                data: dataprov
            })
        });

        var selectProv = $('#select2-provinsi');
        $(selectProv).change(function () {
            var value = $(selectProv).val();
            clearOptions('select2-kabupaten');
            if (value) {
                console.log("on change selectProv");

                var text = $('#select2-provinsi :selected').text();
                console.log("value = " + value + " / " + "text = " + text);

                console.log('Load Kabupaten di '+text+'...')
                $.getJSON(WilayahIndonesia + "kabupaten/" + idasli(value, dataprov) + ".json", function(res) {

                    res = $.map(res, function (obj) {
                        obj.text = obj.nama
                        obj.nama = obj.id
                        obj.id = obj.text
                        return obj;
                    });

                    datakab = [{
                        id: "",
                        nama: "Pilih Kabupaten",
                        text: "Pilih Kabupaten"
                    }].concat(res);

                    //implemen data ke select kabupaten
                    $("#select2-kabupaten").select2({
                        dropdownAutoWidth: true,
                        width: '100%',
                        data: datakab
                    })
                })
            }
        });

        var selectKab = $('#select2-kabupaten');
        $(selectKab).change(function () {
            var value = $(selectKab).val();
            clearOptions('select2-kecamatan');

            if (value) {
                console.log("on change selectKab");

                var text = $('#select2-kabupaten :selected').text();
                console.log("value = " + value + " / " + "text = " + text);

                console.log('Load Kecamatan di '+text+'...')
                $.getJSON(WilayahIndonesia + "kecamatan/" + idasli(value, datakab) + ".json", function(res) {

                    res = $.map(res, function (obj) {
                        obj.text = obj.nama
                        obj.nama = obj.id
                        obj.id = obj.text
                        return obj;
                    });

                    datakec = [{
                        id: "",
                        nama: "Pilih Kecamatan",
                        text: "Pilih Kecamatan"
                    }].concat(res);

                    //implemen data ke select Kecamatan
                    $("#select2-kecamatan").select2({
                        placeholder: "Pilih Kecamatan",
                        dropdownAutoWidth: true,
                        width: '100%',
                        data: datakec
                    })
                })
            }
        });

        var selectKec = $('#select2-kecamatan');
        $(selectKec).change(function () {
            var value = $(selectKec).val();
            clearOptions('select2-kelurahan');

            if (value) {
                console.log("on change selectKec");

                var text = $('#select2-kecamatan :selected').text();
                console.log("value = " + value + " / " + "text = " + text);

                console.log('Load Kelurahan di '+text+'...')
                $.getJSON(WilayahIndonesia + "kelurahan/" + idasli(value, datakec) + ".json", function(res) {

                    res = $.map(res, function (obj) {
                        obj.text = obj.nama
                        obj.nama = obj.id
                        obj.id = obj.text
                        return obj;
                    });

                    datakel = [{
                        id: "",
                        nama: "- Pilih Kelurahan -",
                        text: "- Pilih Kelurahan -"
                    }].concat(res);

                    //implemen data ke select Kelurahan
                    $("#select2-kelurahan").select2({
                        placeholder: "Pilih Kelurahan",
                        dropdownAutoWidth: true,
                        width: '100%',
                        data: datakel
                    })
                })
            }
        });

        var selectKel = $('#select2-kelurahan');
        $(selectKel).change(function () {
            var value = $(selectKel).val();

            if (value) {
                console.log("on change selectKel");

                var text = $('#select2-kelurahan :selected').text();
                console.log("value = " + value + " / " + "text = " + text);
            }
        });