import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
Chart.register(...registerables);
let ChartPage = class ChartPage {
    constructor() {
        this.selectedRange = 'month'; // Default selection
    }
    ngAfterViewInit() {
        this.createChart();
    }
    createChart() {
        this.chart = new Chart(this.chartCanvas.nativeElement, {
            type: 'bar',
            data: this.getChartData('month'), // Default to month data
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    }
    updateChart() {
        if (this.chart) {
            this.chart.data = this.getChartData(this.selectedRange);
            this.chart.update();
        }
    }
    getChartData(range) {
        const dataSets = {
            week: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                data: [5, 10, 7, 15, 8, 12, 20],
            },
            month: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                data: [50, 80, 60, 100],
            },
            year: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                data: [200, 250, 220, 280, 300, 270, 350, 400, 380, 420, 450, 500],
            },
        };
        return {
            labels: dataSets[range].labels,
            datasets: [
                {
                    label: `${range.charAt(0).toUpperCase() + range.slice(1)} Data`,
                    data: dataSets[range].data,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderWidth: 1,
                },
            ],
        };
    }
};
__decorate([
    ViewChild('chartCanvas')
], ChartPage.prototype, "chartCanvas", void 0);
ChartPage = __decorate([
    Component({
        selector: 'app-chart',
        standalone: true,
        imports: [IonicModule, CommonModule, FormsModule],
        templateUrl: './chart.page.html',
        styleUrls: ['./chart.page.scss'],
    })
], ChartPage);
export { ChartPage };
//# sourceMappingURL=chart.page.js.map