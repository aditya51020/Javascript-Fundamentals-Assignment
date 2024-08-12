function estimateDeliveryTime(packageType) {
    let estimatedTime;

    switch (packageType.toLowerCase()) {
        case 'standard':
            estimatedTime = "3-5 days";
            break;
        case 'express':
            estimatedTime = "1-2 days";
            break;
        case 'overnight':
            estimatedTime = "Next day";
            break;
        default:
            estimatedTime = "Invalid package type";
    }

    console.log(`Estimated delivery time for ${packageType} package: ${estimatedTime}`);
}


estimateDeliveryTime('standard');  
estimateDeliveryTime('express');   
estimateDeliveryTime('overnight'); 
estimateDeliveryTime('same-day');  