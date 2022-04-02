 $(document).ready(function() {



$("a.note1:first").qtip({
   content: 'Rule 8-110(c) of the Canadian Electrical Code states that we only need use 75% of the basement floor area in our determination of total area. However, if the home has a suite (legal or otherwise) in the basement, ignore this box. Add 100% of the basement area to the other floor areas and enter the new value into the next box in row 3.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'

   }
});

$("a.note2:first").qtip({
   content: 'Rule 8-110(c) of the Canadian Electrical Code states that we only need use 75% of the basement floor area in our determination of total area.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note3:first").qtip({
   content: 'Rule 8-200(a)(i) of the Canadian Electrical Code states that we shall assign a basic load of 5000 W for the first 90m<sup>2</sup> of living area; plus, as stated in subparagraph (ii), we shall assign an additional 1000 W for each 90m<sup>2</sup> or portion thereof in excess of 90m<sup>2</sup>. <strong>This value is calculated automatically by this form.</strong>',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.sample1:first").qtip({
   content: '<strong>Sample Calculation:</strong><br>A single family home with a 50m<sup>2</sup> basement and 200m<sup>2</sup> of additional living area.<br>Basement Area = 50m<sup>2</sup> x 0.75 = 37.50m<sup>2</sup> [Rule 8-110(c)]<br>Additional Area = 200m<sup>2</sup><br><strong>Total Area</strong> = 237.50m<sup>2</sup> <br> 237.50m<sup>2</sup> = 90m<sup>2</sup>  + 90m<sup>2</sup> + 57.50m<sup>2</sup><br> <br> 5000 W for the first 90m<sup>2</sup><br> 1000 W for the second 90m<sup>2</sup><br> 1000 W for the remaining 57.50m<sup>2</sup><br> <strong>Grand Total</strong> = 7000 W for 237.50m<sup>2</sup><br>',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note4:first").qtip({
   content: '<strong>Space Heat:</strong><br />Space heat includes electric baseboard heaters, electric radiators, anything that electrically heats the air.<br />N.B. This even includes electric <u>sauna heaters</u>.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note5:first").qtip({
   content: '<strong>IMPORTANT!</strong><br />Additional electric ranges (e.g., an additional range in a basement suite) are not added into this calculation. Additional electric ranges are added into the total Watt value of Step 9. Additional Loads. Only 1 electric range may be calculated in this row\'s field.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note6:first").qtip({
   content: '<strong>IMPORTANT!</strong><br />Electric water heaters, like the ones used to heat water for the whole house (e.g., washing, showering, hot water to sink taps) do not go in this calculation. Put household water heaters with a watt rating over 1500W into Step 9. Additional Loads.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note7:first").qtip({
   content: 'The following is for information purposes only. You do not have to do any calculations. Simply enter into the box, on row 16 above, the total Watts value of all your devices that are rated over 1500W.<br><br>Calculation: The final Watt value for additional loads is dependent upon whether an electric range (See Step 6) is present in the home.<br><br><strong>With Electric Range:</strong> If there is an electric range Watt value in Step. 6, this form will add 25% of the combined additional load devices\' Watt ratings; however,<br><br><strong>Without Electric Range:</strong> If there is not an electric range Watt value present in the field for Step 6, this form will add  100% of the devices\' combined Watt ratings of the additional loads up to 6000W, then add 25% of the remaining Watt value.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note8:first").qtip({
   content: '<strong>Total Amps</strong>:<br />This is a straight arithmetic calculation of total watts divided by 240 volts.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note9:first").qtip({
   content: '<strong>Minimum Service Amps:</strong><br />This value is based on a series of calculations and the use of rules which tell us what the final value may be. Depending upon the floor area of the home, this value may not be a straight arithmetic computation.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note10:first").qtip({
   content: '<strong>Hot Conductor Size:</strong><br />According to the footnotes in Table 2 (Copper conductors) of the 2012 CEC, the allowable ampacity for sizes #6 and 2/0 AWG shall be 60A and 200A respectively. <br /><br />The footnotes of Table 4 (Aluminum conductors) of the 2012 CEC state that the allowable ampacity for size #6 shall be 60A.<br /><br /><strong>However!</strong> the 2012 CEC\'s Table 4 footnotes have deleted the special ampacities the 2009 CEC had for #2 and #4/0.<br /><br />The 2012 CEC Table 4 does, however, have higher ampacities than the 2009 CEC had, and we see now that #2/0 is sufficient for Total Demand Amps less than 150A; whereas, the 2009 CEC required a #3/0 wire.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note11:first").qtip({
   content: '<strong>Meter Bases:</strong><br />There are two standard residential meter base sizes: 100 Amp and 200 Amp. The meter base is the device that logs the amount of current a home uses. They are easily recognizable fixtures with their Pyrex glass covers and several rotating dials.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note12:first").qtip({
   content: '<strong>Table Change:</strong><br />Table 17 was deleted in the 2012 CEC. The specifications in 2012\'s CEC Part 1 Table 16, however, remain the same as the specs in the deleted Table 17 of the 2009 CEC, Part 1.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note13:first").qtip({
   content: '<strong>Assumptions:</strong><br /><ol><li>All conductors are installed in an ambient 30 Celsius</li><li>3 current carrying conductors</li><li>All conductors are installed in rigid steel conduit</li><li>Loads are considered to be non-continuous for service / feeder calculation purposes.</li><li>Equipment is rated for continuous operation at 80-percent of its rating.</li><li>System voltage is 120/240-volt single phase.</ol>',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note14:first").qtip({
   content: 'Rule 8-200(a)(iv) of the Canadian Electrical Code states that any electric range load provided for as follows: 6000W for a single range plus 40% of any amount by which the rating of the range exeeds 12kW',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note15:first").qtip({
   content: 'Rule 8-106(4) of the Canadian Electrical Code states that where it is known that electric space heating and air-conditioning loads are installed and will not be used simultaneously, whichever is the greater load shall be used in calculating the demand.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note16:first").qtip({
   content: 'Rule 62-116(1) and 62-116(2)(a),(b) of the Canadian Electrical Code states that in residential occupancies we provide for space heating loads as follows: The first 10kW of connected heating load at 100% of demand factor; plus, the balance of the connected heating load at 75% demand factor.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note17:first").qtip({
   content: 'Rule 8-200(vii) of the Canadian Electrical Code states that we must add any additional electrical loads of 1500W or greater to our calculation. The rule, however, requires some tricky arithmetic which is explained in the note below in row 17. All you need to do is input the total Watts of all your electrical loads of 1500W or greater.<br /><br />For example, if you have three additional electrical loads at 1500W, 3000W, and 2000W, the value you enter into this field will be 6500W (1500+3000+2000=6500).<br /><br />The form will then perform the necessary arithmetic and the proper Watt value will be displayed in the calc field in row 17.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});

$("a.note18:first").qtip({
   content: 'Rule 8-200(vi) of the Canadian Electrical Code states that we must add any electrical vehicle charging equipment loads with a demand factor of 100%.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }
});





$("a.doug:first").qtip({
   content: 'Doug Helmer is a web application developer and former electrician. If you have specific questions about any of the CEC rules or calculations, please contact your local electrical inspection authority and ask to speak to an inspector.',
   position: {
      corner: {
         target: 'rightMiddle',
         tooltip: 'leftMiddle'
      }
   },
   hide: { when: { event: 'unfocus' } },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'leftMiddle',
      name: 'dark'
   }

});

$("a.note99:first").qtip({
   content: '<p><strong>TERMS OF USE / DISCLAIMER:</strong><br />Douglas Helmer provides the calculator on this page for the convenience of licensed and qualified electricians only. Douglas Helmer gives no warranty, express or implied, as to the accuracy, reliability and completeness of any information, formulae or calculations provided through the use of the calculators and does not accept any liability for loss or damage of whatsoever nature, which may be attributable to the reliance on and use of the calculator.</p>', 
   position: {
      corner: {
         target: 'bottomLeft',
         tooltip: 'topRight'
      }
   },
   style: { 
      width: 275,
      background: '#F0F8FF',
      color: 'black',
      border: {
         width: 7,
         radius: 5,
         color: '#87CEEB'
      },
      tip: 'topRight',
      name: 'dark'
   }

});

});

