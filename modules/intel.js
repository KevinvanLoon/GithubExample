let intel_microarchitecture = [
    {
        name : '80486',
        info : {
            year: '1968',
            clock: '100 MHz',
            pipeline: 3
        }
    },
    {
        name : 'Sandy Brigde',
        info : {
            year: "2011",
            clock: '4000 MHz',
            pipeline: 14
        }
    },
    {
        name : 'Silvermont',
        info : {
            year: '2013',
            clock: '2670 MHz',
            pipeline: 14
        }
    },
    {
        name : 'Haswell',
        info : {
            year: '2013',
            clock: '4400 MHz',
            pipeline: 14
        }
    },
    {
        name : 'Kabylake',
        info : {
            year: '2016',
            clock: '4500 MHz',
            pipeline: 14
        }
    },
    {
        name : 'Cannonlake',
        info : {
            year: '2017',
            clock: 'Not defined yet',
            pipeline: 14
        }
    }
];

module.exports = intel_microarchitecture;
